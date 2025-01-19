import React, { useEffect, useState } from "react";
import { Select, Space, Button } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-phone-input-2/lib/style.css";
import { apiPatch } from "../../API/APIService";

const { Option } = Select;
const PreferencesPage = ({ dataUser }) => {
  const [currency, setCurrency] = useState(dataUser?.currency);
  const [language, setLanguage] = useState(dataUser?.setLanguage);

  useEffect(() => {
    if (dataUser) {
      setCurrency(dataUser?.currency);
      setLanguage(dataUser?.language);
    }
  }, [dataUser]);

  const handleCurrency = async () => {
    try {
      const response = await apiPatch("update-currency", {
        currency: currency,
      });

      toast.success(response.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error);
      toast.error("Error internal", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  // const handleCurrency = async () => {
  //   try {
  //     let req1 = await fetch(
  //       `${import.meta.env.VITE_URL_API}/update-currency`,
  //       {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         credentials: "include",
  //         body: JSON.stringify({
  //           currency: currency,
  //         }),
  //       }
  //     );
  //     if (req1.status === 401) {
  //       const req2 = await fetch(
  //         `${import.meta.env.VITE_URL_API}/refresh-token`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           credentials: "include",
  //         }
  //       );
  //       if (req2.ok) {
  //         let req1 = await fetch(
  //           `${import.meta.env.VITE_URL_API}/update-currency`,
  //           {
  //             method: "PATCH",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             credentials: "include",
  //             body: JSON.stringify({
  //               currency: currency,
  //             }),
  //           }
  //         );
  //         let res1 = await req1.json();
  //         if (req1.ok) {
  //           toast.success(res1.message, {
  //             position: "top-center",
  //             autoClose: 1000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "light",
  //           });
  //         } else if (req1.status === 400) {
  //           toast.warn(res1.message, {
  //             position: "top-center",
  //             autoClose: 1000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "light",
  //           });
  //         }
  //       }
  //     }
  //     let res1 = await req1.json();
  //     if (req1.ok) {
  //       toast.success(res1.message, {
  //         position: "top-center",
  //         autoClose: 1000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //     } else if (req1.status === 400) {
  //       toast.warn(res1.message, {
  //         position: "top-center",
  //         autoClose: 1000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Error internal", {
  //       position: "top-center",
  //       autoClose: 1000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  // };

  const handleLanguage = async () => {
    try {
      const response = await apiPatch("update-language", {
        language: language,
      });

      toast.success(response.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error);
      toast.error("Error internal", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  // const handleLanguage = async () => {
  //   try {
  //     let req1 = await fetch(
  //       `${import.meta.env.VITE_URL_API}/update-language`,
  //       {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         credentials: "include",
  //         body: JSON.stringify({
  //           language: language,
  //         }),
  //       }
  //     );
  //     if (req1.status === 401) {
  //       const req2 = await fetch(
  //         `${import.meta.env.VITE_URL_API}/refresh-token`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           credentials: "include",
  //         }
  //       );
  //       if (req2.ok) {
  //         let req1 = await fetch(
  //           `${import.meta.env.VITE_URL_API}/update-language`,
  //           {
  //             method: "PATCH",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             credentials: "include",
  //             body: JSON.stringify({
  //               language: language,
  //             }),
  //           }
  //         );
  //         let res1 = await req1.json();
  //         if (req1.ok) {
  //           toast.success(res1.message, {
  //             position: "top-center",
  //             autoClose: 1000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "light",
  //           });
  //         } else if (req1.status === 400) {
  //           toast.warn(res1.message, {
  //             position: "top-center",
  //             autoClose: 1000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "light",
  //           });
  //         }
  //       }
  //     }
  //     let res1 = await req1.json();
  //     if (req1.ok) {
  //       toast.success(res1.message, {
  //         position: "top-center",
  //         autoClose: 1000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //     } else if (req1.status === 400) {
  //       toast.warn(res1.message, {
  //         position: "top-center",
  //         autoClose: 1000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Error internal", {
  //       position: "top-center",
  //       autoClose: 1000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  // };

  return (
    <div className="p-6 w-2/3 mx-auto bg-white rounded-lg shadow-md">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Preferences</h2>
        </div>
        <p className="text-gray-600 mb-4 font-[Subtitle]">
          Change Your Language, Currency, And Accessibility Requirements.
        </p>
        <div className="">
          <div>
            <p className="text-sm font-bold text-gray-700 mb-3">Currency</p>
            <Space.Compact style={{ width: "100%" }}>
              <Select
                placeholder="Select Currency"
                className="w-3/4"
                dropdownStyle={{
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                onChange={(value) => setCurrency(value)}
                value={currency}
              >
                <Option value="usd">
                  <div className="flex items-center">
                    <span className="text-gray-900">$</span>
                    <span
                      style={{
                        borderLeft: "2px solid #000",
                        height: "16px",
                        margin: "0 8px",
                      }}
                    ></span>
                    <span className="text-gray-900">U.S Dollar</span>
                  </div>
                </Option>
                <Option value="vnd">
                  <div className="flex items-center">
                    <span className="text-gray-900">đ</span>
                    <span
                      style={{
                        borderLeft: "2px solid #000",
                        height: "16px",
                        margin: "0 8px",
                      }}
                    ></span>
                    <span className="text-gray-900">VND</span>
                  </div>
                </Option>
                <Option value="euro">
                  <div className="flex items-center">
                    <span className="text-gray-900">€</span>
                    <span
                      style={{
                        borderLeft: "2px solid #000",
                        height: "16px",
                        margin: "0 8px",
                      }}
                    ></span>
                    <span className="text-gray-900">Euro</span>
                  </div>
                </Option>
                <Option value="yen">
                  <div className="flex items-center">
                    <span className="text-gray-900">¥</span>
                    <span
                      style={{
                        borderLeft: "2px solid #000",
                        height: "16px",
                        margin: "0 8px",
                      }}
                    ></span>
                    <span className="text-gray-900">Yen</span>
                  </div>
                </Option>
              </Select>
              <Button
                type="primary"
                className="w-1/4 bg-[#07689F]"
                onClick={handleCurrency}
              >
                Save
              </Button>
            </Space.Compact>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-700 mt-5 mb-3">
              Language
            </p>
            <Space.Compact style={{ width: "100%" }}>
              <Select
                placeholder="Select Language"
                className="w-3/4"
                dropdownStyle={{
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                onChange={(value) => setLanguage(value)}
                value={language}
              >
                <Option value="English">
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1920px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
                      alt="England"
                      style={{
                        width: "30px",
                        height: "20px",
                      }}
                    />
                    <span
                      style={{
                        borderLeft: "2px solid #000",
                        height: "16px",
                        margin: "0 8px",
                      }}
                    ></span>
                    <span className="text-gray-900">English</span>
                  </div>
                </Option>
                <Option value="VietNam">
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1920px-Flag_of_Vietnam.svg.png"
                      alt="VN"
                      style={{
                        width: "30px",
                        height: "20px",
                      }}
                    />
                    <span
                      style={{
                        borderLeft: "2px solid #000",
                        height: "16px",
                        margin: "0 8px",
                      }}
                    ></span>
                    <span className="text-gray-900">Viet Nam</span>
                  </div>
                </Option>
                <Option value="Japan">
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1920px-Flag_of_Japan.svg.png"
                      alt="Japan"
                      style={{
                        width: "30px",
                        height: "20px",
                      }}
                    />
                    <span
                      style={{
                        borderLeft: "2px solid #000",
                        height: "16px",
                        margin: "0 8px",
                      }}
                    ></span>
                    <span className="text-gray-900">Japan</span>
                  </div>
                </Option>
              </Select>
              <Button
                type="primary"
                className="w-1/4 bg-[#07689F]"
                onClick={handleLanguage}
              >
                Save
              </Button>
            </Space.Compact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferencesPage;
