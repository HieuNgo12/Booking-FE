import axios from "axios";
import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import styled from "styled-components";
import { Button, Modal } from "flowbite-react";
import "./FiveStar.css";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { services } from "../../../Services/services";

function FiveStar({hotel,...props}) {
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState("");
  const [modal, setModal] = useState(false);
  const [openModal, setOpenModal] = useState(true);
  const [image, setImage] = useState(false);
  const [file, setFile] = useState();

  const { id } = useParams();
  const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start
    margin-left: 32px;
    input[type="radio"] {
      display: none;
    }

    row-gap: 16px;
    padding: 12px 0px;

    .star {
      cursor: pointer;
      transition: color 200ms;
    }
  `;
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  const SignupSchema = Yup.object().shape({
    comment: Yup.string().required("Your Comment Is Required"),
    image: Yup.string(),
  });
  const formik = useFormik({
    initialValues: {
      comment: "",
      image: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
        
      const body = {
        objectType: "hotel",
        objectId: hotel._id,
        userId: "6751570cbd20ef4184e7b5e8",
        comment: values.comment,
        rating: rating,
      };
      const data = await services.createReview(body);
      console.log(data);
      const uploadFile = () => {
        const url = `${url}/api/v1/reviews/uploadFile`;
        const formData = new FormData();
        formData.append("file", file);

        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        axios.post(url, formData, config).then(async (response) => {
          console.log(response.data);
          const body = {
            productId: id,
            user: JSON.parse(localStorage.getItem("user"))?.email,
            comment: values.comment,
            rating: rating,
            image: response.data.secure_url,
          };
          console.log(body);
          const res = await axios.post(`${url}/api/v1/create-review`, body);
        });
      };
      uploadFile();
      setModal(false);
      console.log(id);

      window.location.reload();
    },
  });
  return (
    <div>
      <button
        className="search-button ml-6 mb-6"
        onClick={async (e) => {
          e.preventDefault();
          setModal(true);
        }}
      >
        Write a review
      </button>
      <>
        {modal ? (
          <>
            <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e)}}>
              <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className=" review-modal border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Review Comment</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <textarea
                      style={{
                        border: "1px solid black",
                        borderRadius: "4px",
                        height: "200px",
                        width: "80%",
                        paddingLeft: "4px",
                        paddingTop: "4px",
                        marginTop: "6px",
                        marginLeft: "32px",
                      }}
                      id="comment"
                      name="comment"
                      type="comment"
                      className="comment-box ml-6"
                      placeholder="Comment"
                      // value={comment}
                      onChange={formik.handleChange}
                      value={formik.values.comment}
                    />
                    <div className="flex">
                      <div className="error-field pl-8">
                        {" "}
                        {formik.errors.comment && (
                          <div>{formik.errors.comment}</div>
                        )}
                      </div>
                    </div>
                    <Body>
                      <div className="flex">
                        {[...Array(10)].map((star, i) => {
                          const ratingValue = i + 1;

                          return (
                            <label>
                              <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                              />
                              <IoMdStar
                                key={i}
                                className="star"
                                size={20}
                                color={
                                  ratingValue <= (hover || rating)
                                    ? "#2B2073"
                                    : "#e4e5e9"
                                }
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                              />
                            </label>
                          );
                        })}
                      </div>
                      {/* <p>Rating is: {rating}</p> */}

                      <div>
                        <label
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start"
                          for="file_input"
                        >
                          Upload Image
                        </label>
                        <input
                          type="file"
                          id="file-input"
                          onChange={handleChange}
                          placeholder={file}
                        />
                      </div>
                    </Body>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setModal(false)}
                      >
                        Close
                      </button>
                      <button className="search-button" type="submit " >
                        Post Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </form>
          </>
        ) : null}
      </>
    </div>
  );
}

export default FiveStar;
