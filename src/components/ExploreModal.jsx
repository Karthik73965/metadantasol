import { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import emailjs from "emailjs-com";
import toast from 'react-hot-toast';

export default function ExploreModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
            toast.error("Please fill in all fields", {
                autoClose: 500,
                hideProgressBar: false,
            });
            setLoading(false);
            return;
        }

        emailjs.send(
            "service_gs7c16j",
            "template_622yo0e",
            {
                from_name: formData.name,
                reply_to: formData.email,
                phone: formData.phone,
                message: formData.message,
            },
            "cOzRqJT7D9ThFnIpI"
        )
            .then((result) => {
                if (result.text === "OK") {
                    toast.success("Successfully submitted. We'll contact you soon.");
                    setFormData({ name: '', email: '', phone: '', message: '' });
                } else {
                    toast.error("Failed to submit. Please try again.");
                }
                setLoading(false);
            }, (error) => {
                console.error(error);
                toast.error("Error while sending Email");
                setLoading(false);
            });
    };

    return (
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size={{ sm: 'full', md: "lg" }}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Book an Audit with us</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <form onSubmit={sendEmail}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2"><span className="text-red-500">*</span>Full Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#444fff]" placeholder="Enter your full name" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2"><span className="text-red-500">*</span>Work Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#444fff]" placeholder="Enter your work email" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2"><span className="text-red-500">*</span>Phone Number</label>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#444fff]" placeholder="Enter your phone number" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2"><span className="text-red-500">*</span>How can we help you?</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#444fff]" placeholder="Please describe your query or request" required />
                        </div>
                        <button type="submit" className="w-full bg-[#444fff] text-white py-2 rounded-md transition duration-300 hover:bg-[#444fff]">
                            {loading ? 'Loading...' : 'Submit'}
                        </button>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
