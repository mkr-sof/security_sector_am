import React, { useState } from 'react';
import '../cta/cta.css';
import './form.css';

import {useForm} from "react-hook-form";

const Form = ({ onSubmit }) => {
    const [data, setData] = useState({});
    const {
        handleSubmit,
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
    const onFormSubmit = (data) => {
        console.log(data);
        // handleDataChange(data);
        reset();
        // closeModal();
    }
     const handlePhoneChange = (e) => {
        const value = e.target.value;
        if(!value.startsWith("+374")) {
            setValue("phone", "+374" + value);
        }
        // handleDataChange(e);
    }


    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <label>
                Full Name:
                <input
                    type="text"
                    // onChange={handleDataChange}
                    onChange={e => setValue("fullName", e.target.value)}
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
                    // onChange={handleDataChange}
                    // onChange={e => setValue("email", e.target.value)}
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            // value: /^\S+@\S+\.\S+$/,
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
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
                    // onChange={e => setValue("phone", e.target.value)}
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
                   // onSubmit={handleSubmit(onSubmit)}
            />
        </form>
    )
}

export default Form;