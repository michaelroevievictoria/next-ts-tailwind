import styles from '../../../styles/Partial.module.css'
import FooterSection from '../FooterSection/FooterSections'


const Footer = () => {
    return (
        <>
            <FooterSection />
            <div className='mx-auto mt-10 px-6 sm:mt-12 sm:px-6 md:mt-20 lg:mt-20 lg:px-8 xl:mt-28 z-50' style={{ marginTop: '-62px' }}>
                <div style={{ borderTop: '2px solid rgba(255, 255, 255, 0.2)' }}>
                    <div className={styles.footer_main}>
                        <p className='ff-poppins text-white text-sm lg:py-5 sm:py-1 text-center'>© 2022 AidBuilder. All Rights Reserved.</p>
                        <p className='ff-poppins text-white text-sm lg:py-5 sm:py-1 text-center'>Powered by TechEdge Solutions, Inc.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer