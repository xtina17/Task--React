import React from 'react';
import css from './skills.module.css';
import Button from "../../Global/button/button";
import {useSkills} from "../../Providers/skillsProvider";

const Skills = ({array}) => {

    const {deleteSkills} = useSkills()

    return (
        <div className={css.container}>

        <div className={css.skillsBlock}>
            <div className={css.skills}>
                {
                    array.map(({id, number}) => {
                        return <div key={id}>
                            <Button onClick={
                                () => deleteSkills(id)
                            }
                            cn='delete'>
                                x
                            </Button>
                            <span>{number}</span>
                        </div>
                    })

                }

            </div>

        </div>

        </div>
    );
};

export default Skills;