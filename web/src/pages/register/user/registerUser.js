import { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Reemplazar con la lógica real de envío del formulario
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center">
      <div id="form" className="block bg-slate-50 p-6 rounded-xl shodow-md shadow-slate-300 w-90">
        <form action="">
          <div id="fullName" className="flex flex-row">
            <div id="firstName" className="w-1/2 mr-1">
              <label for="fname" className="text-sm">
                First Name
              </label>
              <input type="text" id="fname" className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"></input>
            </div>
            <div id="lastName" className="w-1/2 mr-1">
              <label for="lname" className="text-sm">
                Last Name
              </label>
              <input type="text" id="lname" className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"></input>
            </div>
          </div>

          <label for="email" className="text-sm">
            Email
          </label>

          <input type="emial" id="email" className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"></input>

          <label for="password" className="text-sm">
            Password
          </label>

          <input type="password" id="password" className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"></input>

          <label for="confirmPassword" className="text-sm">
            Confirm Password
          </label>

          <input type="password" id="confirmPassword" className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"></input>
          <div id="gender" className="text-sm mb-2">
            <p className="mt-2">Gender</p>
            <input type="radio" name="gender" id="male" className="text-sm mx-1" checked></input>
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" className="text-sm mx-1"></input>
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" className="text-sm mx-1"></input>
            <label for="other">Other</label>
          </div>

          <input
            type="submit"
            id="signUp"
            className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm"
          ></input>

          <p className="text-xs my-2">
            Already have a account?
            <a href="#" className="text-blue-600">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
