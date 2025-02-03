"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./IdeasLoop.module.scss";
import Link from "next/link";
import AddToCartArrow2 from "@/icons/AddToCart/AddToCartArrow2";
import AddToCartArrow1 from "@/icons/AddToCart/AddToCartArrow1";

const API_URL = process.env.NEXT_PUBLIC_CMS_URL;

const IdeasLoop = ({ ideas }) => {
  return (
    <>
      <section className={styles.ideasWrap}>
        <div className="_container">
          <div className={styles.body}>
            {ideas.map((idea, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                key={index}
                className={styles.ideaRow}
              >
                <div
                  className={styles.image}
                  style={{
                    backgroundImage: `url(${API_URL}${idea.image?.url})`,
                  }}
                ></div>
                <div className={styles.col}>
                  <div>
                    <h3 dangerouslySetInnerHTML={{ __html: idea.title }} />
                    <p dangerouslySetInnerHTML={{ __html: idea.excerpt }} />
                  </div>
                  <Link href={`/ideas/${idea.slug}`}>
                    <div>
                      <AddToCartArrow2 />
                      <span>Read</span>
                      <AddToCartArrow1 />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IdeasLoop;
