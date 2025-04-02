// Import các thư viện cần thiết
import React, { Component } from "react"; // Import React và Component để tạo class component
import { Redirect } from "react-router-dom"; // Import Redirect để điều hướng người dùng đến trang khác
import { connect } from "react-redux"; // Import connect để kết nối component với Redux store
import { LANGUAGES, USER_ROLE } from "../utils"; // Import các hằng số hoặc đối tượng từ file utils

// Định nghĩa class component Home
class Home extends Component {
  render() {
    // Lấy dữ liệu từ props được kết nối với Redux store
    const { isLoggedIn, userInfo } = this.props;

    // Xác định đường dẫn cần điều hướng
    let linkToRedirect =
      isLoggedIn && userInfo.roleId !== USER_ROLE.PATIENT // Kiểm tra nếu người dùng đã đăng nhập và không phải bệnh nhân
        ? "/admin-dashboard" // Nếu đúng, chuyển hướng đến trang quản trị
        : "/home"; // Nếu không, chuyển hướng về trang chủ

    // Sử dụng Redirect để điều hướng người dùng đến link đã xác định
    return <Redirect to={linkToRedirect} />;
  }
}

// Hàm mapStateToProps lấy dữ liệu từ Redux store và chuyển thành props cho component
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn, // Lấy trạng thái đăng nhập từ Redux store
    userInfo: state.user.userInfo, // Lấy thông tin người dùng từ Redux store
  };
};

// Hàm mapDispatchToProps (trống vì không có action nào cần dispatch)
const mapDispatchToProps = (dispatch) => {
  return {}; // Hiện tại không có action nào cần dispatch
};

// Kết nối component Home với Redux store và export
export default connect(mapStateToProps, mapDispatchToProps)(Home);
