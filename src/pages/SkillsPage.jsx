import React, { useState } from "react";
import cardsData from "../assets/skills/skillsData.js";

const SkillsPage = () => {
  const [cards, setCards] = useState(cardsData); // State to manage the card data
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [selectedCardId, setSelectedCardId] = useState(""); // State to store selected card
  const [newSkills, setNewSkills] = useState(
    Array(5).fill({ name: "", value: "" })
  ); // State for up to 5 new skills input
  const [error, setError] = useState(""); // State to handle errors

  // Function to handle opening and closing of modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setError(""); // Reset error message when modal is toggled
  };

  // Function to handle form submission and add multiple new skills
  const handleAddSkills = (e) => {
    e.preventDefault();

    // Filter out empty skills
    const skillsToAdd = newSkills.filter((skill) => skill.name && skill.value);

    // Validation to check that a domain is selected
    if (!selectedCardId) {
      setError("Please select a domain.");
      return;
    }

    // Validation to check that at least one skill and its value are provided
    if (skillsToAdd.length === 0) {
      setError("Please add at least one skill with a proficiency value.");
      return;
    }

    // Find the card to update
    const updatedCards = cards.map((card) => {
      if (card.id === parseInt(selectedCardId)) {
        // Add new skills to the selected card's names array
        return {
          ...card,
          names: [...card.names, ...skillsToAdd], // Expand the card and add the new skills into it
        };
      }
      return card;
    });

    // Update the cards state with the updated cards array
    setCards(updatedCards);
    toggleModal(); // Close the modal
    setNewSkills(Array(5).fill({ name: "", value: "" })); // Reset form input
    setSelectedCardId(""); // Reset selected card
  };

  // Function to handle input change for skills
  const handleSkillChange = (index, field, value) => {
    const updatedSkills = [...newSkills];
    updatedSkills[index] = { ...updatedSkills[index], [field]: value };
    setNewSkills(updatedSkills);
  };

  return (
    <div className="flex flex-col items-center mt-11 mb-5 px-[100px] gap-[45px]">
      <div className="text-center">
        <h1 className="text-[34px] font-bold p-3 pb-4">Skills & Languages</h1>
        <p className="text-center text-[15px] text-[#767676]">
          Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor
          <br /> Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit.
          <br /> Lorem Ipsum
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[45px]">
        
        {cards.map((card) => (
          <div
            style={{ boxShadow: "5px 5px 10px 0px #0000001A" }}
            key={card.id}
            className="w-96 max-h-[316px] bg-white px-12 py-9"
          >
            <p className="text-lg tracking-wide">{card.title}</p>
            <div className="flex flex-col justify-between my-3 max-h-[220px] overflow-y-auto">
              {card.names.map((items, index) => (
                <div key={index} className="flex flex-col pb-2">
                  <div className="flex justify-between pb-1.5">
                    <span className="text-customGrey">{items.name}</span>
                    <span className="text-customGrey">{items.value}%</span>
                  </div>
                  <progress
                    className="progress progress-warning bg-white h-1.5 p-0.5 border border-customYellow"
                    value={items.value}
                    max="100"
                  ></progress>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={toggleModal}
        className="bg-customYellow px-9 py-4 gap-x-2.5 rounded-md flex items-center text-sm font-bold"
      >
        ADD SKILL
      </button>

      {/* Modal for Adding Skills */}
      {isModalOpen && (
        <div
          style={{ zIndex: 200 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div className="bg-white rounded-[10px] shadow-lg w-[833px] py-9 px-7 mt-10">
            <h2 className="text-[44px] text-center font-bold mb-4">
              Add Skill
            </h2>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleAddSkills}>
              <div className="pb-3 w-full">
                <label className="text-[22px]">Domain</label>
                <select
                  value={selectedCardId}
                  onChange={(e) => setSelectedCardId(e.target.value)}
                  className="w-[777px] h-[74px] text-lg bg-[#F0F0F6] rounded-[5px] px-2 border"
                  required
                >
                  <option value="">Select a Domain</option>
                  {cards.map((card) => (
                    <option key={card.id} value={card.id}>
                      {card.title}
                    </option>
                  ))}
                </select>
              </div>
              <label className="text-[22px]">Skills</label>
              <p className="flex justify-between pt-2 pr-6">
                <span className="text-lg">Skill</span>
                <span className="text-lg">Proficiency(%)</span>
              </p>

              {newSkills.map((skill, index) => (
                <div key={index} className="flex justify-between mb-3">
                  <input
                    type="text"
                    value={skill.name}
                    onChange={(e) =>
                      handleSkillChange(index, "name", e.target.value)
                    }
                    className="w-[606px] h-[74px] bg-[#F0F0F6] rounded-[5px] input p-2 border mb-2"
                  />
                  <input
                    type="number"
                    value={skill.value}
                    onChange={(e) =>
                      handleSkillChange(index, "value", e.target.value)
                    }
                    className="w-[150px] h-[74px] bg-[#F0F0F6] rounded-[5px] input border"
                    min="0"
                    max="100"
                  />
                </div>
              ))}

              <div className="flex justify-end gap-x-6">
                <button
                  type="submit"
                  className="px-[17px] py-[16px] bg-customYellow text-sm font-bold text-black rounded w-[151px]"
                >
                  ADD SKILL
                </button>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="px-[17px] py-[16px] bg-white text-sm font-bold text-[#FF5252] border border-[#FF5252] rounded w-[151px]"
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsPage;
