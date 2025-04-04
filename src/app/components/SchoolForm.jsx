// "use client";

// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// export default function SchoolForm({ initialData, onSubmit, onClose }) {
//   const [formData, setFormData] = useState(
//     initialData || {
//       name: "",
//       location: "",
//       address: "", // New field
//       phone: "",   // New field
//       email: "",   // New field
//       establishedDate: "", // New field
//       status: "Active",
//     }
//   );

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
//         <h2 className="text-xl font-bold mb-4">
//           {initialData ? "Edit School" : "Add New School"}
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               School Name
//             </label>
//             <Input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               School Location
//             </label>
//             <Input
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Address
//             </label>
//             <Input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Phone Number
//             </label>
//             <Input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <Input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Established Date
//             </label>
//             <Input
//               type="date"
//               name="establishedDate"
//               value={formData.establishedDate}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Status
//             </label>
//             <select
//               name="status"
//               value={formData.status}
//               onChange={handleChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//             >
//               <option value="Active">Active</option>
//               <option value="Inactive">Inactive</option>
//             </select>
//           </div>

//           <div className="flex justify-end">
//             <Button type="button" onClick={onClose} className="mr-2">
//               Cancel
//             </Button>
//             <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
//               {initialData ? "Update" : "Add"}
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }



// 2



"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SchoolForm({ initialData, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    // Basic Information
    schoolName: initialData?.schoolName || "",
    schoolType: initialData?.schoolType || "",
    affiliation: initialData?.affiliation || "",
    registrationNumber: initialData?.registrationNumber || "",
    yearOfEstablishment: initialData?.yearOfEstablishment || "",
    // Location & Contact Details
    addressStreet: initialData?.addressStreet || "",
    addressCity: initialData?.addressCity || "",
    addressState: initialData?.addressState || "",
    addressCountry: initialData?.addressCountry || "",
    zipCode: initialData?.zipCode || "",
    contactNumberPrimary: initialData?.contactNumberPrimary || "",
    contactNumberSecondary: initialData?.contactNumberSecondary || "",
    emailAddress: initialData?.emailAddress || "",
    website: initialData?.website || "",
    geolocationLatitude: initialData?.geolocationLatitude || "",
    geolocationLongitude: initialData?.geolocationLongitude || "",
    // Administration Details
    principalName: initialData?.principalName || "",
    principalContactNumber: initialData?.principalContactNumber || "",
    principalEmail: initialData?.principalEmail || "",
    adminContactName: initialData?.adminContactName || "",
    adminContactEmail: initialData?.adminContactEmail || "",
    // Academic Information
    gradesOffered: initialData?.gradesOffered || "",
    mediumOfInstruction: initialData?.mediumOfInstruction || "",
    studentStrength: initialData?.studentStrength || "",
    // Authentication Details
    adminUsername: initialData?.adminUsername || "",
    adminPassword: initialData?.adminPassword || "",
    // File uploads (will hold File objects)
    schoolRegistrationCertificate: null,
    accreditationCertificate: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validations
    if (!formData.schoolName || !formData.addressCity) {
      alert("School name and city are required!");
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg overflow-y-auto max-h-full w-full max-w-3xl">
        <h2 className="text-xl font-bold mb-4">School Registration</h2>

        {/* Basic Information */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Basic Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              name="schoolName"
              placeholder="School Name"
              value={formData.schoolName}
              onChange={handleChange}
              required
            />
            <Input
              name="schoolType"
              placeholder="School Type (Public/Private/International/Other)"
              value={formData.schoolType}
              onChange={handleChange}
            />
            <Input
              name="affiliation"
              placeholder="Affiliation (CBSE, ICSE, IB, State Board, etc.)"
              value={formData.affiliation}
              onChange={handleChange}
            />
            <Input
              name="registrationNumber"
              placeholder="Registration Number"
              value={formData.registrationNumber}
              onChange={handleChange}
            />
            <Input
              name="yearOfEstablishment"
              placeholder="Year of Establishment"
              type="number"
              value={formData.yearOfEstablishment}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Location & Contact Details */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Location & Contact Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              name="addressStreet"
              placeholder="Street Address"
              value={formData.addressStreet}
              onChange={handleChange}
            />
            <Input
              name="addressCity"
              placeholder="City"
              value={formData.addressCity}
              onChange={handleChange}
            />
            <Input
              name="addressState"
              placeholder="State"
              value={formData.addressState}
              onChange={handleChange}
            />
            <Input
              name="addressCountry"
              placeholder="Country"
              value={formData.addressCountry}
              onChange={handleChange}
            />
            <Input
              name="zipCode"
              placeholder="ZIP Code"
              value={formData.zipCode}
              onChange={handleChange}
            />
            <Input
              name="contactNumberPrimary"
              placeholder="Primary Contact Number"
              value={formData.contactNumberPrimary}
              onChange={handleChange}
            />
            <Input
              name="contactNumberSecondary"
              placeholder="Secondary Contact Number"
              value={formData.contactNumberSecondary}
              onChange={handleChange}
            />
            <Input
              name="emailAddress"
              placeholder="Email Address"
              type="email"
              value={formData.emailAddress}
              onChange={handleChange}
            />
            <Input
              name="website"
              placeholder="Website (if applicable)"
              value={formData.website}
              onChange={handleChange}
            />
            <Input
              name="geolocationLatitude"
              placeholder="Latitude"
              value={formData.geolocationLatitude}
              onChange={handleChange}
            />
            <Input
              name="geolocationLongitude"
              placeholder="Longitude"
              value={formData.geolocationLongitude}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Administration Details */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Administration Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              name="principalName"
              placeholder="Principal’s Name"
              value={formData.principalName}
              onChange={handleChange}
            />
            <Input
              name="principalContactNumber"
              placeholder="Principal’s Contact Number"
              value={formData.principalContactNumber}
              onChange={handleChange}
            />
            <Input
              name="principalEmail"
              placeholder="Principal’s Email"
              type="email"
              value={formData.principalEmail}
              onChange={handleChange}
            />
            <Input
              name="adminContactName"
              placeholder="Admin Contact Name"
              value={formData.adminContactName}
              onChange={handleChange}
            />
            <Input
              name="adminContactEmail"
              placeholder="Admin Contact Email"
              type="email"
              value={formData.adminContactEmail}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Academic Information */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Academic Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              name="gradesOffered"
              placeholder="Grades Offered (e.g., Pre-KG to 12)"
              value={formData.gradesOffered}
              onChange={handleChange}
            />
            <Input
              name="mediumOfInstruction"
              placeholder="Medium of Instruction"
              value={formData.mediumOfInstruction}
              onChange={handleChange}
            />
            <Input
              name="studentStrength"
              placeholder="Student Strength"
              type="number"
              value={formData.studentStrength}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Supporting Documents Upload */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Supporting Documents Upload</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">School Registration Certificate</label>
              <input type="file" name="schoolRegistrationCertificate" onChange={handleChange} />
            </div>
            <div>
              <label className="block mb-1">Accreditation Certificate</label>
              <input type="file" name="accreditationCertificate" onChange={handleChange} />
            </div>
          </div>
        </div>

        {/* Authentication Details */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Authentication Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              name="adminUsername"
              placeholder="Admin Username"
              value={formData.adminUsername}
              onChange={handleChange}
            />
            <Input
              name="adminPassword"
              placeholder="Admin Password"
              type="password"
              value={formData.adminPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
