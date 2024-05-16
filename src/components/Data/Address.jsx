const Address = ({element}) => {

    let address = `${element.address.address} ${element.address.city} ${element.address.postalCode} ${element.address.state}`;

    return (
        <div>
            {
                address
            }
        </div>
    )
}

export default Address;