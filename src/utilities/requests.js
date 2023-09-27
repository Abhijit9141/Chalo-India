function requests(endpoint) {
    return  `http://localhost:5000/v1/${endpoint}`;
}

export default requests;