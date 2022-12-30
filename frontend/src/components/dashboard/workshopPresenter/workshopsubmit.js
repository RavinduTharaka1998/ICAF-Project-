import React, {useState} from "react";

import {Button, Form, FormGroup, FormText, Input, Label} from "reactstrap";
import {useForm} from "react-hook-form";


import axios from "axios";

const SubmitWorkshop = () => {



    const {register, handleSubmit} = useForm();

    let fileData = null;
    const handleData = (event) => {
        const {name, value} = event.target;
        if (name === "proposal") {
            fileData = event.target.files[0];
        }
        const formData = new FormData();
        formData.append(
            "file",
            fileData,
            fileData.name
        )
        axios.post("http://localhost:5000/workshop/upload", formData)
            .then();
        alert(" File Added...")
    }
    const updateFile = (formData) =>{

    }
    const createData = (workshop) =>{
        axios.post("http://localhost:5000/workshop/Workshopadd", workshop)
            .then();
        alert(" Data Uploaded...")
    }
    const handleWorkshopData = (data) => {
        const workshop = {
            title: data.title,
            email:data.email,
            contact_no:data.contact_no,
            review_state:"pending",
            name: data.name
        }
        console.log(workshop);
        createData(workshop)


    };
    return (
        <div>
            <div className="workshop-submit">
                <p>Proposal submissions should be submitted as a single PPTX file online at the following link:</p>
                <Form className="workshop-from" onSubmit={handleSubmit(handleWorkshopData)}>
                    <FormGroup>
                        <Label>Title :</Label>
                        <Input type="text" name="title" {...register("title")} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Email :</Label>
                        <Input type="text" name="email" {...register("email")} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Contact no :</Label>
                        <Input type="text" name="contact_no" {...register("contact_no")} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Name :</Label>
                        <Input type="text" name="name" {...register("name")} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Proposal :</Label>
                        <Input type="file" name="proposal" encType="multipart/form-data" onChange={handleData} required/>

                    </FormGroup>
                    <br/><br/>
                    <Button color="secondary" size="lg">Submit</Button>
                </Form>
            </div>
        </div>
    );
}

export default SubmitWorkshop;