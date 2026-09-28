package core

type CloudflareLogpushError struct {
	IsCloudflareLogpushError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCloudflareLogpushError(code string, msg string, ctx *Context) *CloudflareLogpushError {
	return &CloudflareLogpushError{
		IsCloudflareLogpushError: true,
		Sdk:              "CloudflareLogpush",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CloudflareLogpushError) Error() string {
	return e.Msg
}
