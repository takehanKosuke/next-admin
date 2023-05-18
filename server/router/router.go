package router

import (
	"github.com/gin-gonic/gin"
	"github.com/takehanKosuke/next-admin/server/handler"
)

func NewRouter(
	userHandler handler.User,
) *gin.Engine {
	r := gin.Default()
	r.GET("/users", userHandler.GetAll)
	r.GET("/users/:userID", userHandler.GetByID)
	r.POST("/users", userHandler.Create)
	r.PUT("/users/:userID", userHandler.Update)
	r.DELETE("/users/:userID", userHandler.Delete)

	return r
}
