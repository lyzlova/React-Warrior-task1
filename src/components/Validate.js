// const validate = (values, step) => {
//     const errors = {};
  
//     switch (step) {
//       case 0:
//         if (!values.firstname) {
//           errors.firstname = "Required";
//         } else if (values.firstname.length < 5) {
//           errors.firstname = "Must be 5 characters or more";
//         }
//         if (!values.lastname) {
//           errors.lastname = "Required";
//         } else if (values.lastname.length < 5) {
//           errors.lastname = "Must be 5 characters or more";
//         }
//         if (!values.password) {
//           errors.password = "Required";
//         } else if (values.password !== values.repeatPassword) {
//           errors.repeatPassword = "Must be equal password";
//         }
//         break;
//       case 1:
//         if (!values.email) {
//           errors.email = "Required";
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//         ) {
//           errors.email = "Invalid email address";
//         }
  
//         if (
//           !/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/i.test(
//             values.mobile
//           )
//         ) {
//           errors.mobile = "Invalid mobile";
//         }
  
//         if (!values.city) {
//           errors.city = "Required";
//         }
//         break;
  
//       case 2:
//         if (!values.avatar) {
//           errors.avatar = "Required";
//         }
//         break;
//       default:
//         break;
//     }
  
//     return errors;
//   };
  
//   export default validate;
  