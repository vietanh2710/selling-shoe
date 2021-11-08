/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Form, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import { removeProduct } from "../../redux/products";

import "./../css/Payment.css";

const Payment = () => {
  const { cart, total } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const onSubmit = React.useCallback(async (params) => {
    console.log("params :>> ", params);
  }, []);

  if (cart.length === 0) return null;

  return (
    <div className="payment">
      <div className="container">
        <div className="purchase_info">
          <h3>Giỏ hàng</h3>
          {cart.map((item) => {
            return (
              <div className="item">
                <img src={item.src} alt="" />

                <div>
                  <p className="name">{item?.title}</p>
                  <p className="desc">{item?.description}</p>
                  <p className="count">Số lượng: {item?.count}</p>

                  <div className="select">
                    <div className="size">Size: 40.5</div>
                    <div className="color">Màu: {item.color}</div>
                  </div>

                  <div
                    className="remove"
                    onClick={() =>
                      dispatch(removeProduct({ id: item._id, size: item.size }))
                    }
                  >
                    Xoá
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="form">
          <h2 className="deli">Thông tin giao hàng</h2>
          <div className="account">
            Bạn đã có tài khoản? <a href="#">Đăng nhập</a>
          </div>

          <Formik
            initialValues={{
              email: "",
              name: "",
              address: "",
              phone: "",
              conscious: "",
              district: "",
              commune: "",
            }}
            onSubmit={() => {}}
          >
            {({ isValid, values, dirty, resetForm }) => {
              return (
                <>
                  <Form.Item name="email" required>
                    <Input
                      autoComplete="new-password"
                      size="large"
                      name="email"
                      placeholder="Email"
                    />
                  </Form.Item>

                  <Form.Item name="name" required>
                    <Input
                      autoComplete="new-password"
                      size="large"
                      name="name"
                      placeholder="Họ và tên"
                    />
                  </Form.Item>

                  <Form.Item name="address" required>
                    <Input
                      autoComplete="new-password"
                      size="large"
                      name="address"
                      placeholder="Địa chỉ"
                    />
                  </Form.Item>

                  <Form.Item name="phone" required>
                    <Input
                      autoComplete="new-password"
                      size="large"
                      name="phone"
                      type="tel"
                      placeholder="Số điện thoại"
                    />
                  </Form.Item>

                  <Form.Item name="conscious" required>
                    <Input
                      autoComplete="new-password"
                      size="large"
                      name="conscious"
                      placeholder="Tỉnh / thành"
                    />
                  </Form.Item>

                  <Form.Item name="district" required>
                    <Input
                      autoComplete="new-password"
                      size="large"
                      name="district"
                      placeholder="Quận / huyện"
                    />
                  </Form.Item>

                  <Form.Item name="commune" required>
                    <Input
                      autoComplete="new-password"
                      size="large"
                      name="commune"
                      placeholder="Phường / xã"
                    />
                  </Form.Item>

                  <div className="price">
                    <p>Tạm Tính: </p>
                    <p>{total || 0}đ</p>
                  </div>
                  <div className="price">
                    <p>Phí vận chuyển: </p>
                    <p>---</p>
                  </div>
                  <div className="total-price">
                    <p>Tổng cổng: </p>
                    <p>
                      <span>vnd</span> {total || 0}đ
                    </p>
                  </div>

                  <SubmitButton
                    className="btn-submit"
                    key="submit"
                    // type="primary"
                    disabled={!isValid || !dirty}
                    onClick={() => {
                      onSubmit(values);
                      resetForm();
                    }}
                  >
                    Thanh Toán
                  </SubmitButton>
                </>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Payment;
