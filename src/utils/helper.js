const shortner = (data) => {
    let splitTitle = data.split(" ").filter((data) => data !== "-");
    return `${splitTitle[0]} ${splitTitle[1]}`;
};

export { shortner };
