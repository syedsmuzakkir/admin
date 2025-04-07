"use client";

import { useState, useEffect } from "react";
import { Country, State, City } from 'country-state-city';

const schoolTypes = ["Public", "Private", "International", "Other"];
const affiliations = ["CBSE", "ICSE", "IB", "State Board"];
const mediumOfInstructionOptions = ["English", "Hindi", "Regional Language", "Bilingual"];

export default function SchoolForm({ initialData, onSubmit, onClose }) {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [formData, setFormData] = useState({
    schoolName: initialData?.schoolName || "",
    schoolType: initialData?.schoolType || "",
    affiliation: initialData?.affiliation || "",
    yearOfEstablishment: initialData?.yearOfEstablishment || "",
    addressStreet: initialData?.addressStreet || "",
    country: initialData?.country || "",
    state: initialData?.state || "",
    city: initialData?.city || "",
    zipCode: initialData?.zipCode || "",
    emailAddress: initialData?.emailAddress || "",
    contactNumber: initialData?.contactNumber || "",
    principalName: initialData?.principalName || "",
    principalContactNumber: initialData?.principalContactNumber || "",
    principalEmail: initialData?.principalEmail || "",
    mediumOfInstruction: initialData?.mediumOfInstruction || "",
    studentStrength: initialData?.studentStrength || "",
    adminUsername: initialData?.adminUsername || "",
    adminPassword: initialData?.adminPassword || "",
    schoolRegistrationCertificate: null,
    accreditationCertificate: null,
  });

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  useEffect(() => {
    if (formData.country) {
      setStates(State.getStatesOfCountry(formData.country));
      setFormData(prev => ({ ...prev, state: "", city: "" }));
    }
  }, [formData.country]);

  useEffect(() => {
    if (formData.country && formData.state) {
      setCities(City.getCitiesOfState(formData.country, formData.state));
      setFormData(prev => ({ ...prev, city: "" }));
    }
  }, [formData.state]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.schoolName || !formData.city) {
      alert("School name and city are required!");
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl overflow-y-auto max-h-full w-full max-w-3xl space-y-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">School Registration Form</h2>

        {/* Basic Information Section */}
        <section className="space-y-6 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 border-b-2 border-blue-200 pb-2">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">School Name *</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">School Type</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                name="schoolType"
                value={formData.schoolType}
                onChange={handleChange}
              >
                <option value="">Select type</option>
                {schoolTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Affiliation</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                name="affiliation"
                value={formData.affiliation}
                onChange={handleChange}
              >
                <option value="">Select affiliation</option>
                {affiliations.map(aff => (
                  <option key={aff} value={aff}>{aff}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Year of Establishment</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                name="yearOfEstablishment"
                value={formData.yearOfEstablishment}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>

        {/* Location & Contact Details */}
        <section className="space-y-6 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 border-b-2 border-blue-200 pb-2">Location & Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Street Address</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                name="addressStreet"
                value={formData.addressStreet}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Country</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Select country</option>
                {countries.map(country => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">State</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white disabled:bg-gray-100"
                name="state"
                value={formData.state}
                onChange={handleChange}
                disabled={!formData.country}
              >
                <option value="">Select state</option>
                {states.map(state => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">City *</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white disabled:bg-gray-100"
                name="city"
                value={formData.city}
                onChange={handleChange}
                disabled={!formData.state}
                required
              >
                <option value="">Select city</option>
                {cities.map(city => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">ZIP Code</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Contact Number</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>

        {/* Administration Details */}
        <section className="space-y-6 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 border-b-2 border-blue-200 pb-2">Administration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Principal's Name</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                name="principalName"
                value={formData.principalName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Principal's Contact</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                name="principalContactNumber"
                value={formData.principalContactNumber}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Principal's Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                name="principalEmail"
                value={formData.principalEmail}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>

        {/* Academic Information */}
        <section className="space-y-6 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 border-b-2 border-blue-200 pb-2">Academic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Medium of Instruction</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                name="mediumOfInstruction"
                value={formData.mediumOfInstruction}
                onChange={handleChange}
              >
                <option value="">Select medium</option>
                {mediumOfInstructionOptions.map(medium => (
                  <option key={medium} value={medium}>{medium}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Student Strength</label>
              <input
                type="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                name="studentStrength"
                value={formData.studentStrength}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>

        {/* Supporting Documents */}
        <section className="space-y-6 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 border-b-2 border-blue-200 pb-2">Documents</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Registration Certificate</label>
              <label className="w-full px-4 py-2 border border-gray-300 rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-100 transition">
                <span className="text-gray-500">
                  {formData.schoolRegistrationCertificate?.name || "Choose file"}
                </span>
                <input
                  type="file"
                  className="hidden"
                  name="schoolRegistrationCertificate"
                  onChange={handleChange}
                />
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Accreditation Certificate</label>
              <label className="w-full px-4 py-2 border border-gray-300 rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-100 transition">
                <span className="text-gray-500">
                  {formData.accreditationCertificate?.name || "Choose file"}
                </span>
                <input
                  type="file"
                  className="hidden"
                  name="accreditationCertificate"
                  onChange={handleChange}
                />
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </label>
            </div>
          </div>
        </section>

        {/* Authentication Details */}
        <section className="space-y-6 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 border-b-2 border-blue-200 pb-2">Authentication</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Admin Username *</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                name="adminUsername"
                value={formData.adminUsername}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Admin Password *</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                name="adminPassword"
                value={formData.adminPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </section>

        {/* Form Actions */}
        <div className="flex justify-end gap-4 pt-6">
          <button
            type="button"
            className="px-6 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
          >
            Submit Registration
          </button>
        </div>
      </form>
    </div>
  );
}