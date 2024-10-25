/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

function ErrorMessage({message}) {
    return (
        <p className="text-red-600 text-[85%] mt-1">{message}</p>
    );
}

function TextInput({name, label, onChange, error_msg}) {
    const error = false;
    const error_style = "border-red-600 bg-red-100";

    return (
        <div className="my-1.5">
            <label for={name} 
            className="text-dark-green-A">
                {label}
            </label>
            <input type="text" id={name} name={name} 
            data-test={`input_${name}`}
            onChange={onChange}
            className={`border-[1px] ${error_msg && error_style} border-dark-green rounded-md`}
            />
            {error_msg &&
            <ErrorMessage message={error_msg} />}
        </div>
    );
}

function EmailInput({name, label, onChange}) {
    const error = false;
    const error_style = "border-red-600 bg-red-100";
    const error_message = "Please fill out this field.";

    return (
        <div className="my-1.5">
            <label for={name}
            className="text-dark-green-A">
                {label}
            </label>
            <input type="email" id={name} name={name}
            data-test={`input_${name}`}
            onChange={onChange} 
            className={`border-[1px] ${error && error_style} border-dark-green rounded-md`}/>
            {error_msg &&
            <ErrorMessage message={error_message} />}
        </div>
    );
}

function TelNumInput({name, label, regex, onChange}) {
    const error = false;
    const error_style = "border-red-600 bg-red-100";
    const error_message = "Please fill out this field.";

    return (
        <div className="my-1.5">
            <label for={name}
            className="text-dark-green-A">{label}</label>
            <input type="tel" id={name} name={label} pattern={regex} 
            data-test={`input_${name}`}
            onChange={onChange}
            className={`border-[1px] ${error && error_style} border-dark-green rounded-md`} /> {/* Using the landline and cellphone PH phone number format. */}
            {error_msg &&
            <ErrorMessage message={error_message} />}
        </div>
    );
}

function CheckboxInput({name, label, options, onChange, error_msg}) {
    const error = false;
    const error_style = "border-red-600 bg-red-100 hover:bg-red-50";

    const optionList = options.map((option, index) => (
        <div key={index} className="flex flex-row self-center">
            {/*
            References for checkbox designs:
            https://www.geeksforgeeks.org/how-to-style-checkboxes-in-tailwind-css/
            https://www.npmjs.com/package/@tailwindcss/forms?activeTab=readme
             */}
            <input
            type="checkbox"
            id={`${name}-${option}`} // Unique ID for each checkbox
            name={name} // Consistent name for form submission
            value={option}
            data-test={`input_${name}_${option.replaceAll(" ", "_").toLowerCase()}`}
            /*className="mx-2 my-1 
            peer relative appearance-none 
            w-5 h-5 border 
            rounded-md border-dark-green-A
            cursor-pointer  
            checked:bg-lime-500 
            checked:border-lime-500"*/
            onChange={onChange}
            className={`form-checkbox mx-2 my-1 w-4 h-4
            cursor-pointer 
            border-3 rounded-sm ${
            error_msg &&
            error_style
            }
            border-dark-green-A
            hover:bg-slate-100
            focus:ring-0 focus:ring-offset-0
            checked:focus:bg-lime-500 
            checked:bg-lime-500 
            checked:border-lime-500
            checked:hover:bg-lime-400`}
            />
            <label key={`${index}-label`} for={`${name}-${option}`}
            className="text-dark-green-A">
                {option}
            </label>
        </div>
    ));

    return (
        <div className="my-1.5">
            <p id={name}
            className="text-dark-green-A">
                {label}
            </p>
            {optionList}
            {error_msg &&
            <ErrorMessage message={error_msg} />}
        </div>
    );
}

function DropDownInput({name, label, options, onChange, error_msg}) {
    const error = false;
    const error_style = "border-red-600 bg-red-100";

    const optionList = options.map((option, index) =>
        <option key={index + 1} value={option}>{option}</option>
    );

    return (
        <div className="my-1.5">
            <label for={name}
            className="text-dark-green-A">
                {label}
            </label> 
            <br />
            <select name={name} id={name}
            data-test={`input_${name}`}
            onChange={onChange}
            className={`border-[1px] ${error_msg && error_style} border-dark-green rounded-md`}>
                 <option disabled selected value>Select {name}</option>
                {optionList}
            </select>
            {error_msg &&
            <ErrorMessage message={error_msg} />}
        </div>
    );
}

function SubmitButton({ onClick }) {
    return (
        <input type="submit" value="+ Add Client" disabled={false}
        data-test="submit_button" 
        onClick={onClick}
        className="text-white text-center bg-lime-500 border-[1px] rounded-md px-2 py-1 w-max self-end mr-2"/> //Disabled.
    );
}

export default function CustomerForm(/*props*/) {
    const statusOptions = ["Completed", "Ongoing", "Terminated", "Pending"];
    const typeOptions = ["Industrial", "Residential", "Commercial", "Service", "Retail", "Other"];
    const serviceOptions = ["Hygenic Pest Control", "Termite Control", "Rodent Control"];

    //States store inputs.
    const [formData, setFormData] = useState({
        client_name: "",
        contact_person: "",
        email_address: "",
        address: "",
        services: [],
        status: "",
        type: "",
        contact_number: "",
    });

    const [errors, setErrors] = useState({
        client_name: "",
        contact_person: "",
        email_address: "",
        address: "",
        services: "",
        status: "",
        type: "",
        contact_number: "",
    })

    const printInputs = () => {
        console.log(formData.client_name);
        console.log(formData.contact_person);
        console.log(formData.email_address);
        console.log(formData.address);
        console.log(formData.services);
        console.log(formData.status);
        console.log(formData.type);
        console.log(formData.contact_number);
    };

    const printErrorMessages = () => {
        console.log(errors.client_name);
        console.log(errors.contact_person);
        console.log(errors.email_address);
        console.log(errors.address);
        console.log(errors.services);
        console.log(errors.status);
        console.log(errors.type);
        console.log(errors.contact_number);
    }

    const handleChange = (e) => {
        e.stopPropagation();
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleCheckboxChange = (e) => {
        e.stopPropagation();

        let services = formData.services

        if (e.target.checked && !(services.includes(e.target.value))) {
            services.push(e.target.value)
        }

        if (!e.target.checked) {
            services = services.filter(service => service !== e.target.value);
        }

        //console.log(new_services);

        setFormData({
           ...formData,
           services: services
        });
    };

    const handleSubmit = () => {
        const new_errors = {
            client_name: "",
            contact_person: "",
            email_address: "",
            address: "",
            services: "",
            status: "",
            type: "",
            contact_number: "",
        };

        const email_regex = /^\S+@\S+\.\S+$/
        if (!email_regex.test(formData.email_address)) {
            console.log(`email_address: Please follow the proper email address format.`)
            new_errors.email_address = "Please follow the proper email address format.";
        }

        const telephone_regex = /^(09|\+639)\d{9}$|^(02|\+6302)\d{8}$/;
        if (!telephone_regex.test(formData.contact_number)) {
            console.log(`contact_number: Please follow the following formats.`)
            new_errors.contact_number = "Please follow the following formats.";
        }

        //Handles requirements:
        for (let data in formData) {
            if (data !== "services" && formData[data] === "")  {
                console.log(`${data}: Please fill out this field.`);
                new_errors[data] = "Please fill out this field.";
            }
        }

        if (formData.services.length <= 0) {
            console.log(`services: Please fill out this field.`);
            new_errors.services = "Please fill out this field.";
        }

        //console.log(new_errors);
        setErrors(new_errors);
    }

    return (
        <div className="flex flex-col p-5">
            <h2 className="text-dark-green-A text-[20px] font-bold mb-1">Customer Information</h2>
            <div className="border-2 flex flex-row">
                <div className="border-2 mx-2 flex flex-col "> {/* column 1 */}
                    <TextInput name="client_name" label="Client Name" onChange={handleChange} 
                    error_msg={errors.client_name} />
                    <TextInput name="contact_person" label="Contact Person" onChange={handleChange} 
                    error_msg={errors.contact_person} />
                    <TextInput name="email_address" label="Email Address" onChange={handleChange} 
                    error_msg={errors.email_address} />
                    <TextInput name="address" label="Address" onChange={handleChange} 
                    error_msg={errors.address} />
                    <CheckboxInput name="services" label="Services" options={serviceOptions} onChange={handleCheckboxChange}
                    error_msg={errors.services} />
                </div>
                <div className="border-2 mx-2 flex flex-col"> {/* column 2 */}
                    <div className="flex flex-col  h-[90%]">
                        <DropDownInput name="status" label="Status" options={statusOptions} onChange={handleChange}
                        error_msg={errors.status} />
                        <DropDownInput name="type" label="Type" options={typeOptions} onChange={handleChange} 
                        error_msg={errors.type} />
                        <TextInput name="contact_number" label="Contact Number" onChange={handleChange} 
                        error_msg={errors.contact_number} /> {/* Regex: ^(09|\+639)\d{9}$|^(02|\+6302)\d{8}$*/}
                    </div>
                    <div className="flex flex-col flex-end justify-end">
                        <SubmitButton onClick={() => {
                            printInputs();
                            handleSubmit();
                        }} />
                    </div>
                </div>
            </div>
        </div>
    );
}