import React from "react";
import styles from "./recipe.module.css";
const Recipe = (props) => {
    const rowLen = props.healthLabels.length;
    const rowCautions = props.cautions.length;
    const rowDiet = props.dietLabels.length;
    return (
        <div className={styles.recipe}>
            <h1 className={styles.title}>{props.title}</h1>
            <img className={styles.image}src={props.image} alt={props.title}/>
            <p><strong className={styles.calories}>Calories</strong> : {props.calories} cal</p>
            
            <p><strong className={styles.health}>Health Labels</strong> : {props.healthLabels.map((healthLabel,id)=> {
                if(rowLen === id + 1){
                    return <span key={id}>{healthLabel} </span>
                }
                return <span key={id}>{healthLabel}, </span>
            }
                
                
            )}
            </p>
            <p><strong className={styles.diet}>Diet Labels</strong> : {props.dietLabels.map((dietLabel,id)=> {
                if(rowDiet === id + 1){
                    return <span key={id}>{dietLabel} </span>
                }
                return <span key={id}>{dietLabel}, </span>
            }
                
                
            )}
            </p>
            <p><strong className={styles.caution}>Cautions</strong> : {rowCautions> 0 ? props.cautions.map((caution,id)=> {
                
                if(rowCautions === id + 1){
                    return <span key={id}>{caution} </span>
                }
                return <span key={id}>{caution}, </span>
            }
                
                ) : "No side effect"}
            </p>
            <h4>Ingredients:</h4>
            <ul>
                {props.ingredients.map((ingredient,id)=> (
                     (
                     <li key={id}>{ingredient.text}</li>
                    )
                ))}
            </ul>
           
        </div>
    )
}

export default Recipe;    