package main

import (
	"context"

	"github.com/gin-gonic/gin"
	"github.com/takehanKosuke/next-admin/server/handler"
	"github.com/takehanKosuke/next-admin/server/infrastructure/mysql"
	"github.com/takehanKosuke/next-admin/server/router"
	"github.com/takehanKosuke/next-admin/server/service"
	"go.uber.org/fx"
)

type APIApplication struct {
	router *gin.Engine
	lc fx.Lifecycle
}

func NewAPIApplication(router *gin.Engine, lc fx.Lifecycle) *APIApplication {
	app := &APIApplication{
		router: router,
		lc: lc,
	}

	lc.Append(fx.Hook{
		OnStart: func(ctx context.Context) error {
			app.router.Run()
			return nil
		},
		OnStop: func(ctx context.Context) error {
			return nil
		},
	})
	return app
}

func main() {
	fx.New(
		fx.Provide(
			NewAPIApplication,
			router.NewRouter,
			handler.NewUser,
			service.NewUser,
			mysql.NewUser,
		),
		fx.Invoke(func(APIApplication *APIApplication) {
			APIApplication.router.Run()
		}),
	).Run()
}
