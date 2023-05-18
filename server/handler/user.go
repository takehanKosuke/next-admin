package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/takehanKosuke/next-admin/server/model"
	"github.com/takehanKosuke/next-admin/server/service"
)

type User interface {
	GetByID(c *gin.Context)
	GetAll(c *gin.Context)
	Create(c *gin.Context)
	Update(c *gin.Context)
	Delete(c *gin.Context)
}

type userImpl struct {
	userService service.User
}

func NewUser(userService service.User) User {
	return &userImpl{
		userService: userService,
	}
}

func (u *userImpl) GetByID(c *gin.Context) {
	user, err := u.userService.GetByID(1)
	if err != nil {
		c.JSON(500, gin.H{
			"message": err.Error(),
		})
		return
	}
	c.JSON(200, user)
}

func (u *userImpl) GetAll(c *gin.Context) {
	users, err := u.userService.GetAll()
	if err != nil {
		c.JSON(500, gin.H{
			"message": err.Error(),
		})
		return
	}
	c.JSON(200, users)
}

func (u *userImpl) Create(c *gin.Context) {
	user, err := u.userService.Create(model.User{})
	if err != nil {
		c.JSON(500, gin.H{
			"message": err.Error(),
		})
		return
	}
	c.JSON(200, user)
}

func (u *userImpl) Update(c *gin.Context) {
	user, err := u.userService.Update(model.User{})
	if err != nil {
		c.JSON(500, gin.H{
			"message": err.Error(),
		})
		return
	}
	c.JSON(200, user)
}

func (u *userImpl) Delete(c *gin.Context) {
	err := u.userService.Delete(1)
	if err != nil {
		c.JSON(500, gin.H{
			"message": err.Error(),
		})
		return
	}
	c.JSON(http.StatusNoContent, nil)
}
