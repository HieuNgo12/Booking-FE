import React, { useState } from "react";
import { Button, Input, Form, Select } from "antd";
import "./styles.css";
import { useForm } from "antd/es/form/Form";

const { Option } = Select;

function ChatBoxName({ currentUser, chatBox, setChatBox }) {
  const [form] = useForm();

  const handleOk = (values) => {
    currentUser(values.name);
    const jsonValues = JSON.stringify(values);
    localStorage.setItem("currentUser", jsonValues);
  };

  const handleClose = () => {
    setChatBox(!chatBox);
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100">
      <Form form={form} layout="vertical" onFinish={handleOk}>
        <div className="bg-white p-5 rounded shadow-lg">
          <h2 className="font-bold text-sm text-[#07689F] mb-3 mt-3 text-center">
            Enter your info so we can easily assist
          </h2>
          <div className="flex flex-col items-end gap-3">
            {/* Name */}
            <Form.Item
              name="name"
              label="Name"
              className="mb-0 flex-grow w-full"
            >
              <Input
                placeholder="Input your name"
                className=" border-[#07689F] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded"
              />
            </Form.Item>

            {/* Gender */}
            <Form.Item
              name="gender"
              label="Gender"
              className="mb-0 flex-grow w-full"
            >
              <Select className="w-full">
                <Option key="Man">Man</Option>
                <Option key="Woman">Woman</Option>
              </Select>
            </Form.Item>

            {/* Button */}
            <Form.Item className="w-full mt-3">
              <div className="flex gap-5">
                <Button
                  htmlType="submit"
                  type="primary"
                  className="h-10 bg-[#07689F] hover:bg-[#055770] text-white font-semibold px-6 rounded w-1/2"
                >
                  OK
                </Button>
                <Button
                  className="h-10 text-[#07689F] font-semibold px-6 rounded w-1/2"
                  onClick={() => handleClose()}
                >
                  Close
                </Button>
              </div>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default ChatBoxName;
