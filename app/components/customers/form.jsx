import { useState } from "react";

function TextInput({name, label, onChange}) {
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
            className={`border-[1px] ${error && error_style} border-dark-green rounded-md`}
            />
        </div>
    );
}

function EmailInput({name, label, onChange}) {
    const error = false;
    const error_style = "border-red-600 bg-red-100";

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
        </div>
    );
}

function TelNumInput({name, label, regex, onChange}) {
    const error = false;
    const error_style = "border-red-600 bg-red-100";

    return (
        <div className="my-1.5">
            <label for={name}
            className="text-dark-green-A">{label}</label>
            <input type="tel" id={name} name={label} pattern={regex} 
            data-test={`input_${name}`}
            onChange={onChange}
            className={`border-[1px] ${error && error_style} border-dark-green rounded-md`} /> {/* Using the landline and cellphone PH phone number format. */}
        </div>
    );
}

function CheckboxInput({name, label, options}) {
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
            className={`form-checkbox mx-2 my-1 w-4 h-4
            cursor-pointer 
            border-3 rounded-sm ${
            error &&
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
        </div>
    );
}

function DropDownInput({name, label, options, onChange}) {
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
            className={`border-[1px] ${error && error_style} border-dark-green rounded-md`}>
                 <option disabled selected value>Select {name}</option>
                {optionList}
            </select>
        </div>
    );
}

function SubmitButton({ onClick }) {
    return (
        <input type="submit" value="+ Add Client" disabled={false}
        data-test="submit_button" 
        onClick={onClick}
        className="text-white text-center bg-lime-500 border-[1px] rounded-md px-2 py-1 w-max self-end mt-[68%] mr-2"/> //Disabled.
    );
}

export default function CustomerForm(/*props*/) {
    //States store inputs.
    const [clientName, setClientName] = useState("");
    const [contactPerson, setContactPerson] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [address, setAddress] = useState("");
    const [services, setServices] = useState([]);
    const [status, setStatus] = useState("");
    const [type, setType] = useState("");
    const [contactNumber, setContactNumber] = useState("");

    const statusOptions = ["Completed", "Ongoing", "Terminated", "Pending"];
    const typeOptions = ["Industrial", "Residential", "Commercial", "Service", "Retail", "Other"];
    const serviceOptions = ["Hygenic Pest Control", "Termite Control", "Rodent Control"]

    const printInputs = () => {
        console.log(clientName);
        console.log(contactPerson);
        console.log(emailAddress);
        console.log(address);
        //console.log(services);
        console.log(status);
        console.log(type);
        console.log(contactNumber);
    };

    return (
        <form className="flex flex-col p-5">
            <h2 className="text-dark-green-A text-[20px] font-bold mb-1">Customer Information</h2>
            <div className="border-2 flex flex-row">
                <div className="border-2 mx-2 flex flex-col "> {/* column 1 */}
                    <TextInput name="client_name" label="Client Name" />
                    <TextInput name="contact_person" label="Contact Person" />
                    <EmailInput name="email_address" label="Email Address" />
                    <TextInput name="address" label="Address" />
                    <CheckboxInput name="services" label="Services" options={serviceOptions} />
                </div>
                <div className="border-2 mx-2 flex flex-col"> {/* column 2 */}
                    <DropDownInput name="status" label="Status" options={statusOptions}/>
                    <DropDownInput name="type" label="Type" options={typeOptions} />
                    <TelNumInput name="contact_number" label="Contact Number" regex="^(09|\+639)\d{9}$|^(02|\+6302)\d{8}$" />
                    <SubmitButton onClick={printInputs}/>
                </div>
            </div>
        </form>
    );
}