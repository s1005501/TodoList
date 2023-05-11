import React from "react";

function TypeButton({ myFilter, setMyFilter }) {
    const filterOptions = ["所有", "進行中", "已完成"];
    return (
        <>
            {filterOptions.map((v, i) => {
                return (
                    <button
                        key={i}
                        type="button"
                        className={
                            v === myFilter
                                ? "filter-button-active"
                                : "filter-button-normal"
                        }
                        onClick={() => {
                            setMyFilter(v);
                        }}
                    >
                        {v}
                    </button>
                );
            })}
        </>
    );
}

export default TypeButton;
