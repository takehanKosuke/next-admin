package	model

type User struct {
	ID		int		`json:"id"`
	Name	string	`json:"name"`
	Age		int		`json:"age"`
	Image	string	`json:"image"`
	Prefecture	int	`json:"prefecture"`
}
