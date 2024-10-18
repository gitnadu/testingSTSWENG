function TextInput({name, label}) {
    return (
        <div>
            <label for={name} 
            className="text-dark-green">
                {label}
            </label>
            <input type="text" id={name} name={name} 
            className="border-[1px] border-dark-green rounded-md"/>
        </div>
    );
}

function EmailInput({name, label}) {
    return (
        <div>
            <label for={name}
            className="text-dark-green">
                {label}
            </label>
            <input type="email" id={name} name={name} 
            className="border-[1px] border-dark-green rounded-md"/>
        </div>
    );
}

function TelNumInput({name, label, regex}) {
    return (
        <div>
            <label for={name}
            className="text-dark-green">{label}</label>
            <input type="tel" id={name} name={label} pattern={regex} 
            className="border-[1px] border-dark-green rounded-md" /> {/* Using the landline and cellphone PH phone number format. */}
        </div>
    );
}

function DropDownInput({name, label, options}) {
    const optionList = options.map((option, index) =>
        <option key={index} value={option}>{option}</option>
    );

    return (
        <div>
            <label for={name}
            className="text-dark-green">
                {label}
            </label> 
            <br />
            <select name={name} id={name}
            className="border-[1px] border-dark-green rounded-md">
                {optionList}
            </select>
        </div>
    );
}

export default function CustomerForm(/*props*/) {
    const statusOptions = ["Completed", "Ongoing", "Terminated", "Pending"];
    const typeOptions = ["Industrial", "Residential", "Commercial", "Service", "Retail", "Other"];

    return (
        <div className="flex flex-col">
            <h2 className="text-dark-green text-[20px] font-bold">Customer Information</h2>
            <div className="border-2 flex flex-row p-2">
                <div className="border-2 flex flex-col p-15"> {/* column 1 */}
                    <TextInput name="client_name" label="Client Name" />
                    <TextInput name="contact_person" label="Contact Person" />
                    <EmailInput name="email_address" label="Email Address" />
                    <TextInput name="address" label="Address" />
                </div>
                <div className="border-2 flex flex-col"> {/* column 2 */}
                    <DropDownInput name="status" label="Status" options={statusOptions}/>
                    <DropDownInput name="type" label="Type" options={typeOptions} />
                    <TelNumInput name="contact_number" label="Contact Number" regex="^(09|\+639)\d{9}$|^(02|\+6302)\d{8}$" />
                </div>
            </div>
        </div>
    );
}