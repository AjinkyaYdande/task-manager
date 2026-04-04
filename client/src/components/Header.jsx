import '../App.css'
// import logout from '/assets/icons/power-off.png'
const Header = () => {
    return (
        <>
            <section className="header">
                <div>
                    <h3>Task Manager</h3>
                </div>
                <div>
                    <img
                        src="/assets/icons/power-off-red.png"
                        alt='logout'
                        className='logout-btn' />
                </div>

            </section>
        </>
    )
}

export default Header;