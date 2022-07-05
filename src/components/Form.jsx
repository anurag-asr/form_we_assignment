import { useState } from "react";

let initialdata = {
  name: "",
  gender: "Male",
  role: "",
  mariatal_status: ""
};

export default function Form() {
  const [data, setData] = useState(initialdata);

  const handleChange = (e) => {
    console.log(e.target.checked);
    const { value, name, checked, type } = e.target;
    const updatedValue = type === "checkbox" ? checked : value;
    setData({
      ...data,
      [name]: updatedValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  // console.log(data.mariatal_status)

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={data.name}
          name="name"
          placeholder="write here something"
          onChange={handleChange}
        />
        <br />
        <select
          name="gender"
          onChange={handleChange}
          defaultValue="Male"
          value={data.gender}
        >
          <option key="Male">Male</option>
          <option key="Female">Female</option>
        </select>

        <br />

        <select name="role" value={data.role} onChange={handleChange}>
          <option key="FrondtEnd">FrontEnd</option>
          <option key="BackEnd">BackEnd</option>
        </select>
        <br />
        <label>mariatal_status</label>
        <input
          type="checkbox"
          onClick={handleChange}
          name="mariatal_status"
          value={data.mariatal_status}
        />
        <br />
        <input type="submit" />

        <ul>
          <li>{data.name}</li>
          <li>{data.gender}</li>
          <li>{data.role}</li>
          <li>{data.mariatal_status}</li>
        </ul>
      </div>
    </form>
  );
}
