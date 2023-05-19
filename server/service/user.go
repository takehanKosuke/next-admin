package service

import (
	"github.com/takehanKosuke/next-admin/server/infrastructure/mysql"
	"github.com/takehanKosuke/next-admin/server/model"
)

type User interface {
	GetByID(id int) (model.User, error)
	GetAll() ([]model.User, error)
	Create(user model.User) (model.User, error)
	Update(user model.User) (model.User, error)
	Delete(id int) error
}

type userImpl struct {
	userMysql mysql.User
}

func NewUser(userMysql mysql.User) User {
	return &userImpl{
		userMysql: userMysql,
	}
}

func (u *userImpl) GetByID(id int) (model.User, error) {
	return u.userMysql.GetByID(id)
}

func (u *userImpl) GetAll() ([]model.User, error) {
	return u.userMysql.GetAll()
}

func (u *userImpl) Create(user model.User) (model.User, error) {
	return u.userMysql.Create(user)
}

func (u *userImpl) Update(user model.User) (model.User, error) {
	return u.userMysql.Update(user)
}

func (u *userImpl) Delete(id int) error {
	return u.userMysql.Delete(id)
}
