import React, { useState } from 'react';
import '../cta/cta.css';
import './form.css';

import {useForm} from "react-hook-form";

const Form = ({ handleDataChange }) => {
    const [data, setData] = useState({});
    const {
        register,
        setValue,
        formState: {errors},
        reset
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            phone: "+374"
        }
    });
    const handleSubmit = (data) => {
        setData(data);
        // e.preventDefault();
        console.log(JSON.stringify(data));
        reset()
    }
 // console.log(errors)
    const handlePhoneChange = (e) => {
        const value = e.target.value;
        if(!value.startsWith("+374")) {
            setValue("phone", "+374" + value);
        }
        handleDataChange(e);
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Full Name:
                <input
                    type="text"
                    onChange={handleDataChange}
                    {...register("fullName", {
                        required: "Enter your name here"
                    })}
                />
            </label>
            <div >
                {errors?.fullName && <p className="validation-message">{errors?.fullName?.message || "Error!"}</p>}
            </div>

            <label>
                Email:
                <input
                    type="email"
                    onChange={handleDataChange}
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: "Email is invalid"
                        }
                    })}
                />
            </label>
            <div >
                {errors?.email && <p className="validation-message">{errors?.email?.message || "Error!"}</p>}
            </div>

            <label>
                Your Phone:
                <input
                    type="tel"
                    placeholder="+374..."
                    onChange={handlePhoneChange}
                    {...register("phone", {
                        required: "Enter your phone here",
                        pattern: {
                            value: /^\+374\d{8}$/,
                            message: "Phone is invalid"
                        }
                    })}
                />
            </label>
            <div >
                {errors?.phone && <p className="validation-message">{errors?.phone?.message || "Error!"}</p>}
            </div>
            <input type="submit"
                   className="security__cta-btn"
                   onSubmit={setData}
            />
        </form>
    )
}

export default Form;