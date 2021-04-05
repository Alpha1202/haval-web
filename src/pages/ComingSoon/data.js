export const inputData = [
  {
    label: "First Name",
    type: "input",
    inputType: "name",
    input: 'firstname',
    validation: 'empty'
  },
  {
    label: "Last Name",
    type: "input",
    inputType: "name",
    input: 'lastname',
    validation: 'empty'
  },
  {
    label: "E-mail Address",
    type: "input",
    inputType: "email",
    input: 'email',
    validation: 'email'
  },
  {
    label: "Phone Number",
    type: "input",
    inputType: "phone number",
    input: 'phone',
    validation: 'phoneNumber'
  },
  {
    label: "Category",
    type: "dropdown",
    input: 'category',
    items: [
      { value: "artist", label: "Artist" },
      { value: "author", label: "Author" },
    ],
  },
  {
    label: "Organization",
    type: "dropdown",
    input: 'organization',
    items: [
      { value: "independent", label: "Independent" },
      { value: "church", label: "Church" },
    ],
  },

  {
    label: "I agree to receive e-mails from Haval",
    type: "radio",
  },
  {
    label: "Continue",
    type: "button",
  },
];
