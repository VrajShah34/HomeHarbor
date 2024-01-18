import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQMEBQIGB//EAC4QAAICAQIEBAYBBQAAAAAAAAABAgMRBDESIUFRMmFxkQUTIlNigVIUM0Khsf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/cQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmd2OUOfmBa2luzw7oruzO5Nvm8kAXO/tH/Y+e+xSCC9XLqmWRsjLZmQFG0GaFso+aL4TU1yYHoAAAAAAAAAAACm+ePpXXcDzbZl4TaRUAQADxddCmPFN+iW7A9g509dY39CUV7nhay9Px59UgOoDJTroy+m2PC+6fI2AQSm4vK5EADVXNTXn2PZkjJxllGpNNJookAAAAAAAEN4WTJJ5eTRe8Q9WZgAAIIlJQi5PZc2ci2yVs3KXXZdjoa540z82kcwoAAIG/wCH3OSdUnlrnH0MBdo3w6mt93j3A6oJIIoX6eX+P7KD1W8TTA1gAoAAAAAKNQ/Cikt1G8SogAACnVw49PJLdczlHbObq9M6m5w5w/4UZgAEDRoYcWpi8corJRCMpyUYptvojqaWhUQxnMn4gLyACKEkADYtkSRHZElAAAAABTeuSZQarI8UGjKAADwllvC7kAPbDMd2uw+GlJ/k9jLLU3N/3H+ijfPSUzeeFxf4s8LQ1LeU3+zF8+37kvcfPt+5L3A6tdcKliEUj0cj+ou+5L3LK9ZbDxYmvMDpgrpvhdHMeTW67FhAJistIgsojmeewGlbAAoAAAAABmujwz5bM0nmceOLQGT1MOvv5umL28RvknF4fQ4k5Oc5Se7eQIAAQAAAAAeq5yrmpQeGjr02K2uM49TjG/4bLMJx7NMK2mmqPDFZ3K6q8vL26F4AAAAAAAAAAAeLa1OLXXHJnz19Fmnnw2Rx2fRn0h4srhZFxnFSXZoD5oHUv+Fc3KiePxkYrNJqK/FVLHdc0EUANNPDWCMoCQeoVzm8QhKXosmqn4bfZzmlBebAxnW+GaWyClO1cKljCe5o02hpow0uKf8AKRqCgAAAAAAAAAAAAAAAAAAhxi90n6kcEf4x9j0AIwSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q==',
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;