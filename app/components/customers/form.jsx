function TextInput({name, label}) {
    const error = true;
    const error_style = "border-red-600 bg-red-100";

    return (
        <div className="my-1">
            <label for={name} 
            className="text-dark-green-A">
                {label}
            </label>
            <input type="text" id={name} name={name} 
            data-test={`input_${name}`}
            className={`border-[1px] ${error && error_style} border-dark-green rounded-md`}
            />
        </div>
    );
}

function EmailInput({name, label}) {
    const error = true;
    const error_style = "border-red-600 bg-red-100";

    return (
        <div className="my-1">
            <label for={name}
            className="text-dark-green-A">
                {label}
            </label>
            <input type="email" id={name} name={name}
            data-test={`input_${name}`} 
            className={`border-[1px] ${error && error_style} border-dark-green rounded-md`}/>
        </div>
    );
}

function TelNumInput({name, label, regex}) {
    const error = true;
    const error_style = "border-red-600 bg-red-100";

    return (
        <div className="my-1">
            <label for={name}
            className="text-dark-green-A">{label}</label>
            <input type="tel" id={name} name={label} pattern={regex} 
            data-test={`input_${name}`}
            className={`border-[1px] ${error && error_style} border-dark-green rounded-md`} /> {/* Using the landline and cellphone PH phone number format. */}
        </div>
    );
}

function CheckboxInput({name, label, options}) {
    const error = true;
    const error_style = "";

    const optionList = options.map((option, index) => (
        <div key={index} className="flex flex-row self-center">
          <input
            type="checkbox"
            id={`${name}-${option}`} // Unique ID for each checkbox
            name={name} // Consistent name for form submission
            value={option}
            data-test={`input_${name}_${option}`}
            className="mx-2 my-1 accent-dark-green-A"
          />
          <label key={`${index}-label`} for={`${name}-${option}`}
          className="text-dark-green-A">
            {option}
          </label>
        </div>
    ));

    return (
        <div className="my-1">
            <p id={name}
            className="text-dark-green-A">
                {label}
            </p>
            {optionList}
        </div>
    );
}

function DropDownInput({name, label, options}) {
    const error = true;
    const error_style = "border-red-600 bg-red-100";

    const optionList = options.map((option, index) =>
        <option key={index + 1} value={option}>{option}</option>
    );

    return (
        <div className="my-1">
            <label for={name}
            className="text-dark-green-A">
                {label}
            </label> 
            <br />
            <select name={name} id={name}
            data-test={`input_${name}`}
            className={`border-[1px] ${error && error_style} border-dark-green rounded-md`}>
                 <option disabled selected value>Select {name}</option>
                {optionList}
            </select>
        </div>
    );
}

function SubmitButton() {
    return (
        <input type="submit" value="+ Add Client" disabled={true}
        data-test="submit_button" 
        className="text-white text-center bg-lime-500 border-[1px] rounded-md px-2 py-1 w-max self-end mt-[45%] mr-2"/> //Disabled.
    );
}

export default function CustomerForm(/*props*/) {
    const statusOptions = ["Completed", "Ongoing", "Terminated", "Pending"];
    const typeOptions = ["Industrial", "Residential", "Commercial", "Service", "Retail", "Other"];
    const serviceOptions = ["Hygenic Pest Control", "Termite Control", "Rodent Control"]

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
                <div className="border-2 mx-2 flex flex-col gap-2"> {/* column 2 */}
                    <DropDownInput name="status" label="Status" options={statusOptions}/>
                    <DropDownInput name="type" label="Type" options={typeOptions} />
                    <TelNumInput name="contact_number" label="Contact Number" regex="^(09|\+639)\d{9}$|^(02|\+6302)\d{8}$" />
                    <SubmitButton />
                </div>
            </div>
        </form>
    );
}