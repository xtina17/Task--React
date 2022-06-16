import React from "react";
import style from "./header.module.css";
import Button from "../Global/button/button";
import {useSkills} from "../Providers/skillsProvider";

const Header = () => {
    const {skills, addSkills, sortCards} = useSkills()

    return (
        <header className={style.header}>


            <div className={style.btns}>
                <Button
                    onClick={() => {
                        {
                            addSkills({
                                id: Math.random(),
                                number: Math.floor(Math.random() * 100)
                            })
                        }
                    }}
                    cn="skillButton"
                >
                    Add Card
                </Button>
                <Button
                    onClick={() => sortCards(skills.sort((a, b) => a.number - b.number))}
                    cn="skillButton"
                >
                    Sort Card
                </Button>
            </div>
        </header>
    )
}
export default Header;