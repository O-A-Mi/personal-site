import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './GallerySection.module.css';

const artPieces = [
  { id: 1, src: "/icone.png" },
  { id: 2, src: "/Kraskaya.png" },
  { id: 3, src: "/leonidas.png" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 20 }
  }
};

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const { t } = useLanguage();

  return (
    <section ref={ref} className={styles.galleryContainer}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        {t.gallery.title}
      </motion.h2>

      <motion.div 
        className={styles.galleryGrid}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {artPieces.map((art) => (
          <motion.div key={art.id} className={styles.artCard} variants={itemVariants}>
            <img src={art.src} alt={`${t.gallery.altPrefix} ${art.id}`} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GallerySection;
