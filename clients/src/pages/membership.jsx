import React, { useState, useEffect } from 'react';

const Membership = () => {
  const [formData, setFormData] = useState({
    membershipTier: '',
    fullName: '',
    fathersName: '',
    batch: '',
    enrollmentNumber: '',
    programme: '',
    branch: '',
    year: '',
    semester: '',
    phone: '',
    email: '',
    experience: '',
    achievements: '',
    availability: '',
    futureGoals: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const toggleFields = () => {
    // This is now handled by conditional rendering in the JSX
  };

  const validateForm = () => {
    const newErrors = {};

    // Check required fields
    const requiredFields = [
      'membershipTier', 'fullName', 'phone', 'email', 'programme',
      'branch', 'availability'
    ];

    // Add student-specific required fields
    if (formData.membershipTier === 'Student') {
      requiredFields.push('fathersName', 'batch', 'enrollmentNumber', 'year', 'semester');
    }

    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = `${getFieldLabel(field)} is required`;
      }
    });

    // Validate email format
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate phone number
    if (formData.phone && !/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
    }

    // Validate terms acceptance
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and conditions';
    }
    // Convert availability radio buttons to single value
    const availability = document.querySelector('input[name="availability"]:checked');
    data.availability = availability ? availability.value : '';

    // Convert checkbox to boolean string
    data.acceptTerms = document.getElementById('acceptTerms').checked.toString();
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getFieldLabel = (field) => {
    const labels = {
      membershipTier: 'Membership tier',
      fullName: 'Full name',
      fathersName: 'Father\'s name',
      batch: 'Batch',
      enrollmentNumber: 'Enrollment number',
      programme: 'Programme',
      branch: 'Branch',
      year: 'Year',
      semester: 'Semester',
      phone: 'Contact number',
      email: 'Email address',
      availability: 'Availability',
      acceptTerms: 'Terms and conditions'
    };

    return labels[field] || field;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Prepare data for submission
      const submissionData = { ...formData };

      // Add default values for professional tier
      if (submissionData.membershipTier === 'Professional') {
        submissionData.fathersName = 'Not Available';
        submissionData.batch = 'Not Available';
        submissionData.enrollmentNumber = 'Not Available';
        submissionData.year = 'Not Available';
        submissionData.semester = 'Not Available';
      }

      // Simulate API call (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1500));

      // const response = await fetch('https://aairosociety.com/ApI/membership', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(submissionData)
      // });

      setIsSubmitted(true);
      // Reset form after successful submission
      setFormData({
        membershipTier: '',
        fullName: '',
        fathersName: '',
        batch: '',
        enrollmentNumber: '',
        programme: '',
        branch: '',
        year: '',
        semester: '',
        phone: '',
        email: '',
        experience: '',
        achievements: '',
        availability: '',
        futureGoals: '',
        acceptTerms: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Failed to submit application. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Membership Tiers Section */}
      <section className="py-16 mt-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">Join Our Society</h2>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Become a member of AAIRO and unlock a world of opportunities in Artificial Intelligence and Robotics.
            Whether you're a student, researcher, professional, or alumni, we have a membership tier for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Student Membership */}
            <div className="bg-gray-800/50 border border-blue-500/20 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Student Membership</h3>
              <p className="text-gray-300 mb-6">Perfect for students passionate about AI and Robotics.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-300">Access to workshops & seminars</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-300">Project collaboration opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-300">Networking with peers & faculty</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-300">Eligibility for competitions</span>
                </li>
              </ul>
              <a href="#membership-form" className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg text-center font-medium hover:opacity-90 transition-opacity">
                Apply Now
              </a>
            </div>

            {/* Faculty Membership */}
            {/* <div className="bg-gray-800/50 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm hover:border-purple-500/40 transition-all">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Faculty Membership</h3>
              <p className="text-gray-300 mb-6">For industry professionals and researchers.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-300">All student benefits, plus:</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-300">Access to exclusive research papers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-300">Mentorship opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-300">Industry networking events</span>
                </li>
              </ul>
              <a href="#membership-form" className="block w-full mt-14 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg text-center font-medium hover:opacity-90 transition-opacity">
                Apply Now
              </a>
            </div> */}

            {/* Alumni Partnership */}
            <div className="bg-gray-800/50 border border-cyan-500/20 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-500/40 transition-all">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Alumni Partnership</h3>
              <p className="text-gray-300 mb-6">For companies looking to collaborate and support.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-300">All professional benefits, plus:</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-300">Custom project collaborations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-300">Branding & recruitment opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-300">Featured in AAIRO publications</span>
                </li>
              </ul>
              <a href="#footer" className="block w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 px-6 rounded-lg text-center font-medium hover:opacity-90 transition-opacity">
                Inquire Now
              </a>
            </div>

            {/* Corporate Partnership */}
            <div className="bg-gray-800/50 border border-cyan-500/20 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-500/40 transition-all">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Corporate Partnership</h3>
              <p className="text-gray-300 mb-6">For companies looking to collaborate and support.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-300">All professional benefits, plus:</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-300">Custom project collaborations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-300">Branding & recruitment opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-300">Featured in AAIRO publications</span>
                </li>
              </ul>
              <a href="#footer" className="block w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 px-6 rounded-lg text-center font-medium hover:opacity-90 transition-opacity">
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Form Section */}
      <section id="membership-form" className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Membership Application Form</h2>
          <p className="text-lg text-gray-300 text-center mb-12">
            Please fill out the form below to apply for your desired membership tier.
          </p>

          {isSubmitted ? (
            <div className="bg-green-900/30 border border-green-500/20 rounded-xl p-8 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-400 mx-auto mb-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h3 className="text-2xl font-bold text-green-400 mb-2">Application Submitted Successfully!</h3>
              <p className="text-gray-300">Thank you for your application. We'll review your information and get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Membership Tier */}
              <div>
                <label htmlFor="membershipTier" className="block text-gray-300 mb-2">Desired Membership Tier:</label>
                <select
                  id="membershipTier"
                  name="membershipTier"
                  value={formData.membershipTier}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a tier</option>
                  <option value="Student">Student Membership</option>
                  <option value="Professional">Faculty Membership</option>
                </select>
                {errors.membershipTier && <p className="mt-1 text-sm text-red-400">{errors.membershipTier}</p>}
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-gray-300 mb-2">Full Name:</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                  {errors.fullName && <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>}
                </div>

                {/* Student-specific fields */}
                {formData.membershipTier === 'Student' && (
                  <>
                    <div>
                      <label htmlFor="fathersName" className="block text-gray-300 mb-2">Father's Name:</label>
                      <input
                        type="text"
                        id="fathersName"
                        name="fathersName"
                        value={formData.fathersName}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      {errors.fathersName && <p className="mt-1 text-sm text-red-400">{errors.fathersName}</p>}
                    </div>
                    <div>
                      <label htmlFor="batch" className="block text-gray-300 mb-2">Batch:</label>
                      <input
                        type="text"
                        id="batch"
                        name="batch"
                        value={formData.batch}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      {errors.batch && <p className="mt-1 text-sm text-red-400">{errors.batch}</p>}
                    </div>
                    <div>
                      <label htmlFor="enrollmentNumber" className="block text-gray-300 mb-2">Enrollment Number:</label>
                      <input
                        type="text"
                        id="enrollmentNumber"
                        name="enrollmentNumber"
                        value={formData.enrollmentNumber}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      {errors.enrollmentNumber && <p className="mt-1 text-sm text-red-400">{errors.enrollmentNumber}</p>}
                    </div>
                  </>
                )}
              </div>

              {/* Academic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="programme" className="block text-gray-300 mb-2">Programme:</label>
                  <input
                    type="text"
                    id="programme"
                    name="programme"
                    value={formData.programme}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                  {errors.programme && <p className="mt-1 text-sm text-red-400">{errors.programme}</p>}
                </div>
                <div>
                  <label htmlFor="branch" className="block text-gray-300 mb-2">Branch:</label>
                  <input
                    type="text"
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                  {errors.branch && <p className="mt-1 text-sm text-red-400">{errors.branch}</p>}
                </div>

                {/* Student-specific fields */}
                {formData.membershipTier === 'Student' && (
                  <>
                    <div>
                      <label htmlFor="year" className="block text-gray-300 mb-2">Year:</label>
                      <input
                        type="text"
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      {errors.year && <p className="mt-1 text-sm text-red-400">{errors.year}</p>}
                    </div>
                    <div>
                      <label htmlFor="semester" className="block text-gray-300 mb-2">Semester:</label>
                      <input
                        type="text"
                        id="semester"
                        name="semester"
                        value={formData.semester}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      {errors.semester && <p className="mt-1 text-sm text-red-400">{errors.semester}</p>}
                    </div>
                  </>
                )}
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">Contact Number:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10,15}"
                    title="Please enter a valid phone number (10-15 digits)"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email Address:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>
              </div>

              {/* Relevant Skills */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Relevant Skills</h3>
                <label htmlFor="experience" className="block text-gray-300 mb-2">
                  Briefly describe your Skills in AI, Robotics, IoT, and Automation (e.g., python, C++):
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Achievements</h3>
                <label htmlFor="achievements" className="block text-gray-300 mb-2">
                  List any awards, certifications, or notable accomplishments in any area:
                </label>
                <textarea
                  id="achievements"
                  name="achievements"
                  value={formData.achievements}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Availability */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Availability</h3>
                <label className="block text-gray-300 mb-2">
                  Are you available to contribute to society meetings and events?
                </label>
                <div className="flex items-center space-x-6">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="availability"
                      value="Yes"
                      checked={formData.availability === 'Yes'}
                      onChange={handleChange}
                      className="text-blue-500 focus:ring-blue-500"
                      required
                    />
                    <span className="ml-2 text-gray-300">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="availability"
                      value="No"
                      checked={formData.availability === 'No'}
                      onChange={handleChange}
                      className="text-blue-500 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-300">No</span>
                  </label>
                </div>
                {errors.availability && <p className="mt-1 text-sm text-red-400">{errors.availability}</p>}
              </div>

              {/* Future Goals */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Future Goals</h3>
                <label htmlFor="futureGoals" className="block text-gray-300 mb-2">
                  What are your goals, and how can this society help you achieve them?
                </label>
                <textarea
                  id="futureGoals"
                  name="futureGoals"
                  value={formData.futureGoals}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Terms and Conditions */}
              <div className="pt-4">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="mt-1 text-blue-500 focus:ring-blue-500"
                    required
                  />
                  <span className="ml-2 text-gray-300">
                    I hereby declare that I have read, understood, and agree to abide by the Terms and Conditions of the AAIRO Society.
                  </span>
                </label>
                {errors.acceptTerms && <p className="mt-1 text-sm text-red-400">{errors.acceptTerms}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-bold hover:opacity-90 transition-opacity disabled:opacity-70"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Submit Application'
                  )}
                </button>
                {errors.submit && <p className="mt-2 text-sm text-red-400 text-center">{errors.submit}</p>}
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Membership;