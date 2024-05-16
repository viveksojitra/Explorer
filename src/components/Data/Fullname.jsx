const Fullname = ({element}) => {

    let fullname = `${element.firstName} ${element.lastName} ${element.maidenName}`;

    return (
        <div>
            {
                fullname
            }
        </div>
    )
}

export default Fullname;