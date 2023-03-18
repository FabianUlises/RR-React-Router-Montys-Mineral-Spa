

export default function Packages(props) {
    const displayPackages = props.packages.map((item, i) => <li>{item}</li>)
    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                </div>
                <ul>
                    {displayPackages}
                </ul>
            </div>
        </div>
    )
}