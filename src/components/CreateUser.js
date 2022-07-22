import { validateDate, validateJoinedDate, validateName, validateType } from "../validation/validation";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import checkIcon from "../assets/check.svg";
import errorIcon from "../assets/error.svg";
import ToastMessage from "../message/ToastMessage";
import UserService from "../services/UserService";

const CreateUser = () => {
    const [toastList, setList] = useState([]);
    const showToast = (msg, type) => {
        switch (type) {
            case 'success':
                const toastSuccess = {
                    title: 'Success',
                    description: msg,
                    backgroundColor: '#5cb85c',
                    icon: checkIcon
                }
                setList([...toastList, toastSuccess]);
                break;
            case 'fail':
                const toastFail = {
                    title: 'Danger',
                    description: 'Failed: ' + msg,
                    backgroundColor: '#d9534f',
                    icon: errorIcon
                }
                setList([...toastList, toastFail]);
                break;
            default:
                break;
        }

    }

    const initialUserState = {
        firstName: "",
        lastName: "",
        dob: "",
        gender: "Male",
        joinedDate: "",
        type: ""
    };

    let navigate = useNavigate();

    const [newUser, setNewUser] = useState(initialUserState);

    const [touched, setTouched] = useState({
        firstName: false,
        lastName: false,
        dob: false,
        joinedDate: false,
        type: false
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        console.log(event.target.name + ": " + event.target.value);
        setNewUser({ ...newUser, [name]: value });
    };

    const handleBlur = evt => {
        setTouched({
            ...touched,
            [evt.target.name]: true
        })
    }

    const createUser = (e) => {
        e.preventDefault();
        console.log(newUser);
        UserService.create(newUser)
            .then(response => {
                console.log(response.data);
                showToast('User was created successfully!', 'success');
                setTimeout(() => {
                    window.location.reload();
                    //navigate('/users');
                }, 2000);
            })
            .catch(e => {
                if (e.response.status == '401') {
                    showToast("Login with Admin Role is required to create Post", 'fail');
                }
                else {
                    showToast('Create failed with Status: ' + e.response.status, 'fail');
                    console.log(e);
                }
            });
    }

    const errorFirstName = validateName(newUser.firstName);
    const errorLastName = validateName(newUser.lastName);
    const errorDob = validateDate(newUser.dob);
    const errorJoinedDate = validateJoinedDate(newUser.joinedDate, newUser.dob);
    const errorType = validateType(newUser.type);

    const formValid = !errorFirstName && !errorLastName && !errorDob && !errorJoinedDate && !errorType;

    return (
        <div className="container mt-5">
            <Form onSubmit={createUser} validated={false}>
                <Form.Group className="mb-3">
                    <Form.Label> First Name </Form.Label>
                    <Form.Control
                        required
                        name="firstName"
                        value={newUser.firstName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="text"
                        isInvalid={touched.firstName && Boolean(errorFirstName)}
                        isValid={touched.firstName && !Boolean(errorFirstName)} />
                    <Form.Control.Feedback type="invalid">{errorFirstName}</Form.Control.Feedback>
                    <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        name="lastName"
                        value={newUser.lastName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="text"
                        isInvalid={touched.lastName && Boolean(errorLastName)}
                        isValid={touched.lastName && !Boolean(errorLastName)} />
                    <Form.Control.Feedback type="invalid">{errorLastName}</Form.Control.Feedback>
                    <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Date Of Birth</Form.Label>
                    <Form.Control
                        name="dob"
                        value={newUser.dob}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="date"
                        min={new Date('1900/01/02').toISOString().split("T")[0]}
                        isInvalid={touched.dob && Boolean(errorDob)}
                        isValid={touched.dob && !Boolean(errorDob)} />
                    <Form.Control.Feedback type="invalid">{errorDob}</Form.Control.Feedback>
                    <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Gender</Form.Label>
                    <Form.Check className="ml-5"
                        defaultChecked
                        inline
                        label="Male"
                        type="radio"
                        name="gender"
                        value="Male"
                        selected="selected"
                        onChange={handleInputChange} />
                    <Form.Check className="ml-5"
                        inline
                        label="Female"
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Joined Date</Form.Label>
                    <Form.Control
                        name="joinedDate"
                        value={newUser.joinedDate}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="date"
                        min={new Date('1900/01/02').toISOString().split("T")[0]}
                        isInvalid={touched.joinedDate && Boolean(errorJoinedDate)}
                        isValid={touched.joinedDate && !Boolean(errorJoinedDate)} />
                    <Form.Control.Feedback type="invalid">{errorJoinedDate}</Form.Control.Feedback>
                    <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="mr-5">Type</Form.Label>
                    <Form.Select size="lg" aria-label="" name="type" style={{ width: "150px" }} onChange={handleInputChange}
                        isInvalid={touched.type && Boolean(errorType)}
                        isValid={touched.type && !Boolean(errorType)} 
                        onBlur={handleBlur}>
                        <option value=""></option>
                        <option value="ADMIN">Admin</option>
                        <option value="STAFF">Staff</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">{errorType}</Form.Control.Feedback>
                    <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                </Form.Group>
                <Button disabled={!formValid} variant="danger" type="submit">
                    Save
                </Button>
                <Button variant="light" className="btn btn-outline-secondary" type="button">
                    Cancel
                </Button>
            </Form><ToastMessage
                toastList={toastList}
                position="top-right"
                autoDelete={true}
                autoDeleteTime={3000} /></div>
    );
}

export default CreateUser;