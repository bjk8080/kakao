const ChildComponent=(props) => {

    const handleChange=()=>{
        props.onChange(e.target.value);
    }

    return(
        <div>
            <h1>자식의 상태값: {props.dataForChild}</h1>
            <input
                type="text"
                onchange={handleChange}
            />
        </div>
    )
};

export default ChildComponent;
