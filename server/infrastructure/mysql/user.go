package mysql

import "github.com/takehanKosuke/next-admin/server/model"

type User interface {
	GetByID(id int) (model.User, error)
	GetAll() ([]model.User, error)
	Create(user model.User) (model.User, error)
	Update(user model.User) (model.User, error)
	Delete(id int) error
}

type userImpl struct {}

func NewUser() User {
	return &userImpl{}
}

func (u *userImpl) GetByID(id int) (model.User, error) {
	return model.User{}, nil
}

func (u *userImpl) GetAll() ([]model.User, error) {
	return []model.User{}, nil
}

func (u *userImpl) Create(user model.User) (model.User, error) {
	return model.User{}, nil
}

func (u *userImpl) Update(user model.User) (model.User, error) {
	return model.User{}, nil
}

func (u *userImpl) Delete(id int) error {
	return nil
}

