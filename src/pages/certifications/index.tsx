import Section from '../../components/section';
import data from '../../data/filesPath';
import CarouselCustom from '../../components/Carousel';
import { CertificationsWrapper } from './styles';



function Certifications() {
    return data ? (
        <CertificationsWrapper className='CertificationsWrapper'>
            <Section elementName="Certifications" HeaderText='Certification' customstyle="background-color: var(--primary); height: 90vh">
                <div className='Carrousel'>
                    <CarouselCustom Itens={data} />
                </div>
                <div className='CertificationsText'>
                    <ul>
                        <li>Supplementary Course in Python Programming Language (2019)</li>
                        <li>Supplementary Course in C Programming Language (2017)</li>
                        <li>Oratory Supplementary Course (2017)</li>
                        <li>My First Single Page Application Course with React (2019)</li>
                        <li>RTTI in Delphi Practice Course (2019)</li>
                        <li>Mastering Object Orientation and Components in Advanced Delphi Course (2019)</li>
                    </ul>
                </div>
            </Section>
        </CertificationsWrapper>
    ) : <>

    </>
};

export default Certifications;