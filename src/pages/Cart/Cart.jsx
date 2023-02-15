import React, { useEffect, useState } from 'react'
import NavLogin from '../../components/Navbar/Navbar2isLogin'
import NavCom2 from '../../components/Navbar/Navbar2'
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../../features/authSlice'
import { CardElement, useElements, useStripe, PaymentElement } from '@stripe/react-stripe-js'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Cart = () => {
    let { id, customer_id } = useParams()
    console.log(customer_id)
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [priceId, setPriceId] = useState('')
    // const [amount, setAmount] = useState([])
    const stripe = useStripe()
    const elements = useElements()

    const steps = ['Masukkan Nama dan Email', 'Pilih']
    const step1 = (<div className='flex flex-col gap-2'>
        <input
            className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer'
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <input
            className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer'
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
    </div>)
    const step2 = (<>
        <CardElement />
    </>)

    // const fetchPrice = async () => {
    //     const { data } = await axios.get(`http://localhost:5000/v1/prices/${id}`)
    //     setAmount(data)
    // }


    const createSubscription = async (e) => {
        e.preventDefault()
        try {
            
            const paymentMethod = await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(CardElement),
                billing_details: {
                    name,
                    email
                }
            })

            const response = await axios.post('http://localhost:5000/create-subscription', {
                payment_method: paymentMethod.paymentMethod.id,
                name,
                email,
                priceId
            })

            const confirmPayment = await stripe.confirmCardPayment(response.data.clientSecret)
            if (confirmPayment.error) {
                alert(confirmPayment.error.message);
            } else {
                handleNext()
            }
        } catch (error) {
            console.log(error)
        }
    }



    // const createSubscription = async (e) => {
    //     e.preventDefault()
    //     try {
    //         // Create a card token
    //         const cardToken = await stripe.createToken(elements.getElement(PaymentElement));
    //         // Create a PaymentMethod
    //         const paymentMethod = await stripe.createPaymentMethod({
    //             type: 'card',
    //             card: cardToken.token.id,
    //             billing_details: {
    //                 name,
    //                 email
    //             }
    //         });
    //         // Create the Payment Intent
    //         const paymentIntent = await stripe.paymentIntents.create({
    //             amount: amount.unit_amount,
    //             currency: 'idr',
    //             payment_method: paymentMethod.paymentMethod.id,
    //             customer: {
    //                 name: name,
    //                 email: email
    //             },
    //             confirm: true
    //         });

    //         // Send the Payment Intent client secret and other data to your server
    //         const response = await axios.post('http://localhost:5000/create-subscription', {
    //             payment_method: paymentIntent.payment_method,
    //             name,
    //             email,
    //             priceId,
    //             client_secret: paymentIntent.client_secret
    //         })

    //         // Confirm the Payment Intent
    //         const confirmPayment = await stripe.confirmCardPayment(response.client_secret)
    //         if (confirmPayment.error) {
    //             alert(confirmPayment.error.message);
    //         } else {
    //             alert("Success! Check your email for the invoice.");
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])
    useEffect(() => {
        setPriceId(id)
    }, [id])
    // useEffect(() => {
    //     fetchPrice()
    // }, [])


    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div>
            {user ? <NavLogin /> : <NavCom2 />}
            <main className='mt-10 container w-[80%] mx-auto'>
                <div>
                    <h1 className='lg:text-3xl font-bold md:text-2xl text-xl'>Selesaikan pembayaran</h1>
                        <form onSubmit={createSubscription}>

                        <Box sx={{ width: '100%' }}>
                            <Stepper activeStep={activeStep}>
                                {steps.map((label, index) => {
                                    const stepProps = {};
                                    const labelProps = {};
                                    if (isStepSkipped(index)) {
                                        stepProps.completed = false;
                                    }
                                    return (
                                        <Step key={label} {...stepProps}>
                                            <StepLabel {...labelProps}>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        All steps completed - you&apos;re finished
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        <Button onClick={handleReset}>Reset</Button>
                                    </Box>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                                    {activeStep === 0 ? <Box>{step1}</Box> : activeStep > 0 ? <Box className="hidden" >{step1}</Box> : <></>}
                                    {activeStep === 1 ? <Box>{step2}</Box> : activeStep < 1 ? <Box className="hidden" >{step2}</Box> : <></>}
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Button
                                            color="inherit"
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            sx={{ mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                        <Box sx={{ flex: '1 1 auto' }} />

                                        {activeStep === steps.length - 1 ? <Button type='submit' >Finish</Button> : <Button onClick={handleNext}>
                                            Next
                                        </Button>}
                                    </Box>
                                </React.Fragment>
                            )}
                        </Box>
                        </form>
                </div>
            </main >
        </div >
    )
}

export default Cart