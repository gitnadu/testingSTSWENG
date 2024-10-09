
export default function Touch() {
  return (
    <div className="py-6 pl-16 pr-24 pt-12 mt-4">
    
      <h1 className="text-6xl font-semibold mb-8 text-off-white italic pb-6">Get in Touch With Us</h1>
      
      <div className="flex flex-row">

        <div className="basis-3/12 text-off-white w-full px-8">
          <p className="text-xl text-justify">Have a suggestion, feedback, or question for us? We&apos;re always eager to improve and value your input! Whether you&apos;re sharing your thoughts, asking for help, or just want to connect, feel free to reach out.</p>
          <hr className="my-10" />

          <div className="flex flex-row gap-x-8 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-14">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <div className="flex flex-col text-lg">
              <p>(0922) 800 0783</p>
              <p>(0915) 180 4469</p>
            </div>
          </div>

          <div className="flex flex-row gap-x-8 mb-8 align-middle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-14">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
            </svg>
            <p className="my-auto text-lg">multpest14@yahoo.com</p>
          </div>

          <div className="flex flex-row gap-x-8 mb-8 align-middle">
          <span class="[&>svg]:h-14 [&>svg]:w-14">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
          <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>
          </span>
            <p className="my-auto text-lg">/ Multi-Pest Services</p>
          </div>

        </div>

        <div className="basis-9/12 bg-dark-green-B w-full rounded-xl p-4 content-center">
        <div className="flex flex-col px-16 pt-4">

          <label 
            htmlFor="" 
            className="block text-md text-off-white pb-2">
            Full Name
          </label>

          <input
            id=""
            name=""
            type="text"
            className="block w-full rounded-md border-0 py-1.5 px-4 mb-4 text-off-white ring-1 ring-inset ring-light-green bg-dark-green-B
                     focus:ring-2"
          />

          <label 
            htmlFor="" 
            className="block text-md text-off-white pb-2">
            Email
          </label>

          <input
            id=""
            name=""
            type="text"
            className="block w-full rounded-md border-0 py-1.5 px-4 mb-4 text-off-white ring-1 ring-inset ring-light-green bg-dark-green-B
                     focus:ring-2"
          />

          <label 
            htmlFor="" 
            className="block text-md text-off-white pb-2">
            Message
          </label>

          <textarea
            id=""
            name=""
            type="text"
            className="block w-full rounded-md border-0 py-1.5 px-4 mb-8 text-off-white ring-1 ring-inset ring-light-green bg-dark-green-B
                     focus:ring-1 focus:ring-inset h-[16vh] resize-none"
          />

        <div className="flex justify-end">
        <button type="button" class="text-white bg-dark-green-B shadow-lg 
        ring-1 ring-inset ring-light-green w-1/4
        focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5
        hover:bg-light-green hover:text-dark-green-B transition duration-300 ease-in-out">Submit</button>
        </div>

        </div>        
        </div>

      </div>
      
    </div>
  );
}
