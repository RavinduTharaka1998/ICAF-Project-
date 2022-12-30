import React, {useState} from "react";

import {Button, Form, FormGroup, FormText, Input, Label} from "reactstrap";
import {useForm} from "react-hook-form";


import axios from "axios";

const SubmitResearch = () => {
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
        axios.post("http://localhost:5000/research/upload", formData)
            .then();
        alert("File Added...")
    }
    const updateFile = (formData) =>{

    }
    const createData = (research) =>{
        axios.post("http://localhost:5000/research/Researchadd", research)
            .then();
        alert("Uploaded...")
    }
    const handleWorkshopData = (data) => {
        const research = {
            title: data.title,
            email:data.email,
            contact_no:data.contact_no,
            review_state:"pending",
            name: data.name
        }
        console.log(research);
        createData(research)


    };

    return (
        <div>
            <div className="research-submit">
                <p>Proposal submissions should be submitted as a single DOC/PDF file online at the following link:</p>
                <Form className="research-from" onSubmit={handleSubmit(handleWorkshopData)}>
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

export default SubmitResearch;