import React, { useState, useEffect } from "react";
import "../../styles/Admin.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import Chip from "@mui/material/Chip";
import back from "../../assets/back.png";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
export default function AddProduct() {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [prouctTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [selectedAttribute, setSelectedAttribute] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);
  const [variants, setVariants] = useState([]);
  const [update, setUpdate] = useState(false);
  const [image, setImage] = useState(null);
  const [base64Image, setBase64Image] = useState("");
  const [savedVariants, setSavedVariants] = useState([]);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
    const reader = new FileReader();

    reader.onload = (event) => {
      const base64Data = event.target.result;
      setBase64Image(base64Data);
    };

    reader.readAsDataURL(file);
  };

  const { Dragger } = Upload;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  async function GetCategories() {
    const response = await fetch("https://acad-ecommerce.noot.ae/category/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NjYxOTc3LCJpYXQiOjE2ODgxMjU5NzcsImp0aSI6IjJhNTgzYzBlMmE5YjQ2ODM4NTBkODgyY2M3ZTE2ZGE0IiwidXNlcl9pZCI6MSwic2NoZW1hX25hbWUiOiJzY2hlbWFfcmJocWVrd2tweXluZXJuZmlrYnl0bmdpIn0.RnKzZHszMi9XbphRn86FKNxYGOssWl-XcKC0Bw4E7yE",
      },
    });
    const data = await response.json();
    console.log(data.results);
    setCategories(data.results);
  }

  async function GetAttributes() {
    const response = await fetch(
      "https://acad-ecommerce.noot.ae/products/variants/attribute",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NjYxOTc3LCJpYXQiOjE2ODgxMjU5NzcsImp0aSI6IjJhNTgzYzBlMmE5YjQ2ODM4NTBkODgyY2M3ZTE2ZGE0IiwidXNlcl9pZCI6MSwic2NoZW1hX25hbWUiOiJzY2hlbWFfcmJocWVrd2tweXluZXJuZmlrYnl0bmdpIn0.RnKzZHszMi9XbphRn86FKNxYGOssWl-XcKC0Bw4E7yE",
        },
      }
    );
    const data = await response.json();
    console.log(data.results);
    setAttributes(data.results);
  }
  useEffect(() => {
    GetCategories();
    GetAttributes();
  }, [null]);
  const deleteVariant = (id) => {
    const updatedVariants = variants.filter((data) => data.id !== id);
    setVariants(updatedVariants);
  };
  const deleteSavedVariant = (id) => {
    const updatedVariants = savedVariants.filter((data) => data.id !== id);
    setSavedVariants(updatedVariants);
  };

  async function CreateProduct() {
    setloading(true);
    const response = await fetch(
      "https://acad-ecommerce.noot.ae/products/create/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NjYxOTc3LCJpYXQiOjE2ODgxMjU5NzcsImp0aSI6IjJhNTgzYzBlMmE5YjQ2ODM4NTBkODgyY2M3ZTE2ZGE0IiwidXNlcl9pZCI6MSwic2NoZW1hX25hbWUiOiJzY2hlbWFfcmJocWVrd2tweXluZXJuZmlrYnl0bmdpIn0.RnKzZHszMi9XbphRn86FKNxYGOssWl-XcKC0Bw4E7yE",
        },
        body: JSON.stringify({
          description: [
            {
              is_ltr: true,
              text: productDescription,
              lang: "en",
            },
          ],
          items: savedVariants,
          category: productCategory,
          name: [
            {
              is_ltr: true,
              text: prouctTitle,
              lang: "en",
            },
          ],
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    setloading(false);
    navigate("/admin");
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Variant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control onChange={handleUpload} type="file" />
          </Form.Group>
          <Form>
            <div className="variant-form-div mt-4">
              <Form.Select
                onChange={(e) => setSelectedAttribute(e.target.value)}
                className="color-dropdown"
                aria-label="Default select example"
                value={selectedAttribute}
              >
                <option>Choose Attribute</option>
                {attributes.length > 0
                  ? attributes.map((attribute, index) => (
                      <option key={index} value={attribute.id}>
                        {attribute.name}
                      </option>
                    ))
                  : null}
              </Form.Select>

              <InputGroup className="color-input">
                <Form.Control
                  value={selectedValue}
                  onChange={(e) => setSelectedValue(e.target.value)}
                  placeholder="Enter the attribute value"
                  aria-label="Title"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <Button
                onClick={() => {
                  variants.push({
                    id: variants.length + 1,
                    attribute: parseInt(selectedAttribute),
                    attribute_value: selectedValue,
                  });
                  setUpdate(!update);
                  setSelectedAttribute("");
                  setSelectedValue("");
                }}
                variant="success"
              >
                {" "}
                +{" "}
              </Button>
            </div>
            <div className="tags-div mt-1">
              {variants.length > 0
                ? variants.map((variant, index) => (
                    <Chip
                      className="ms-2"
                      color="primary"
                      label={variant.attribute_value}
                      onDelete={() => deleteVariant(variant.id)}
                    />
                  ))
                : null}
            </div>
            <div className="create-product-title mt-3">
              <span>Price</span>
              <InputGroup className="mb-3">
                <Form.Control
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="0 USD"
                  aria-label="Title"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <div className="create-product-title mt-1">
              <span>Discount</span>
              <InputGroup className="mb-3">
                <Form.Control
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  placeholder="10%"
                  aria-label="Title"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <div className="create-product-title mt-1">
              <span>Quantity</span>
              <InputGroup className="mb-3">
                <Form.Control
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="0"
                  aria-label="Title"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              const formData = new FormData();
              formData.append("image", image);
              const uploadedFile = formData.get("image");
              console.log(uploadedFile);
              savedVariants.push({
                id: savedVariants.length + 1,
                sku_set: variants,
                images_set: [],
                discount: discount,
                price: parseInt(price),
                quantity: parseInt(quantity),
                slug: prouctTitle.replace(/ /g, "-"),
              });
              setUpdate(!update);
              handleClose();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="d-flex">
        <Button
          onClick={() => navigate("/admin")}
          variant="light"
          className="table-view-btn"
        >
          {" "}
          <img width={20} src={back} /> Products Table{" "}
        </Button>
      </div>
      <div className="admin-main-div">
        <div className="mt-4">
          <Card style={{ width: "40rem" }}>
            <Card.Body>
              <div className="create-product-title">
                <h5>Create New Product</h5>
              </div>
              <div className="create-product-title mt-3">
                <span>Product Title</span>
                <InputGroup className="mb-3">
                  <Form.Control
                    value={prouctTitle}
                    onChange={(e) => setProductTitle(e.target.value)}
                    placeholder=""
                    aria-label="Title"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
              <div className="create-product-title mt-2">
                <span>Product Description</span>
                <CKEditor
                  editor={ClassicEditor}
                  data={productDescription}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setProductDescription(data);
                  }}
                />
              </div>
              <div className="create-product-title mt-3">
                <span>Category</span>
                <Form.Select
                  value={productCategory}
                  onChange={(e) => setProductCategory(parseInt(e.target.value))}
                  aria-label="Default select example"
                >
                  <option>Choose Category</option>
                  {categories.length > 0
                    ? categories.map((category, index) => (
                        <option key={index} value={category.id}>
                          {category.name}
                        </option>
                      ))
                    : null}
                </Form.Select>
              </div>
            </Card.Body>
          </Card>
          <Card className="mt-3" style={{ width: "40rem" }}>
            <Card.Body>
              {" "}
              <div className="variants-main-div">
                {" "}
                <h5>Create New Product</h5>{" "}
                <Button onClick={handleShow} variant="success">
                  Add Variant
                </Button>
              </div>
              <div className="d-flex">
                {savedVariants.length > 0
                  ? savedVariants.map((variant, index) => (
                      <Chip
                        className="ms-2"
                        color="primary"
                        label={"Variant " + index}
                        onDelete={() => deleteSavedVariant(variant.id)}
                      />
                    ))
                  : null}
              </div>
            </Card.Body>
          </Card>
          <Button
            disabled={loading}
            onClick={CreateProduct}
            className="product-save-btn"
          >
            <div className="loading-div">
              {" "}
              {loading ? (
                <CircularProgress
                  className="me-2"
                  color="inherit"
                  size={"20px"}
                />
              ) : null}
              <span> Save </span>{" "}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
}
