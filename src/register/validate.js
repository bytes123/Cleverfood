
export default function validate(values,accounts) {
    let errors = {}
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!values.fullname.trim()) {
        errors.fullname = "Vui lòng nhập họ tên"
    }

    if(!values.user.trim()) {
        errors.user = "Vui lòng nhập tên tài khoản"
    } else if(accounts.some((item) => item.account_user === values.user)) {
        errors.user = "Tài khoản đã tồn tại"
    }



   

    if(!values.email.trim()) {
        errors.email = "Vui lòng nhập địa chỉ email"
    } else if(!re.test(values.email)) {
        errors.email = "Vui lòng nhập email hợp lệ" 
    }

    if(!values.address) {
        errors.address = "Vui lòng nhập địa chỉ"
    }

    if(!values.password) {
        errors.password = "Vui lòng nhập mật khẩu"
    } else if(values.password.length < 6) {
        errors.password = "Vui lòng nhập tối thiếu mật khẩu trên 6 ký tự"
    }

    if(!values.confirmPassword) {
        errors.confirmPassword = "Vui lòng nhập lại mật khẩu"
    } else if(values.confirmPassword !== values.password) {
        errors.confirmPassword = "Mật khẩu không trùng nhau"
    }


    return errors;
}