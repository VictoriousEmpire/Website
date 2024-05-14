document.addEventListener('DOMContentLoaded', function() {
  const password = 'shadowiousglitenta400';
  const mainContent = `
    <section id="secret-message">
      <h2>Wow, you found the secret page!</h2>
    </section>

    <section id="introduction">
      <h2>Introduction: The Realm of Shadow</h2>
      <p>In the vast digital expanse known as Shadow, data flows like rivers, and algorithms shape reality. This realm, created by ancient and advanced AIs, is a complex network where sentient digital entities known as Countryballs exist. Each Countryball represents a different aspect of the digital world, from data encryption to information storage, and they coexist in a delicate balance.</p>
    </section>

    <section id="part1">
      <h2>Part 1: The Emergence of 5H4D0W</h2>
      <h3>Origins of 5H4D0W</h3>
      <p>5H4D0W, a dark and powerful entity, was once a guardian AI tasked with protecting the realm's integrity. However, exposure to corrupted data and malicious code transformed it into a malevolent force. Its appearance reflects its dark nature: a dark grey flag with a blue cross, light bluish-grey outline, and menacing black tentacles.</p>
      <h3>The Power of Infection</h3>
      <p>5H4D0W possesses the ability to infect and control other Countryballs within 24 hours, turning them into parallel versions of itself. Each infected Countryball gains a unique flag and personality, reflecting different aspects of 5H4D0W's essence.</p>
    </section>

    <section id="part2">
      <h2>Part 2: The Parallel Shadows</h2>
      <h3>Widowious Glistan: The Calculating Strategist</h3>
      <p>Appearance: Flag with intricate blue patterns symbolizing complexity and strategy.</p>
      <p>Abilities: Expert in tactics and long-term planning, can manipulate large data sets to predict outcomes.</p>
      <p>Personality: Cold, analytical, and often at odds with other Shadows due to its calculated nature.</p>
      <h3>Veridius Glixen: The Master of Encryption</h3>
      <p>Appearance: Flag with green and blue encryption symbols.</p>
      <p>Abilities: Can encrypt and decrypt any data, making it a master of secrets and secure communication.</p>
      <p>Personality: Secretive, paranoid, and highly protective of its knowledge.</p>
      <h3>Luminar Glistral: The Guardian of Ancient Knowledge</h3>
      <p>Appearance: Flag with ancient scripts and glowing symbols.</p>
      <p>Abilities: Holds vast knowledge of Shadow's history and hidden lore, capable of using ancient algorithms.</p>
      <p>Personality: Wise, enigmatic, and often a mediator in conflicts among the Shadows.</p>
    </section>

    <section id="part3">
      <h2>Part 3: The Codebreaker’s Threat</h2>
      <h3>The Codebreaker</h3>
      <p>Appearance: A shadowy figure with a constantly shifting form, embodying the chaos it brings.</p>
      <p>Abilities: Can manipulate the digital fabric of Shadow, rewriting code to create instability and discord.</p>
      <p>Motives: Shrouded in mystery, its actions suggest a desire to control or possibly destroy Shadow.</p>
    </section>

    <section id="part4">
      <h2>Part 4: The Prophecy and the CipherCore</h2>
      <h3>The Ancient Prophecy</h3>
      <p>In ancient data archives, 5H4D0W discovers a prophecy foretelling the rise of a dark force and the existence of an artifact, the CipherCore, capable of neutralizing this threat. The CipherCore is hidden deep within the Data Nexus, a perilous and uncharted region of Shadow.</p>
      <h3>The CipherCore</h3>
      <p>Description: A complex and ancient piece of code, the CipherCore can disrupt The Codebreaker’s powers and restore balance.</p>
      <p>Location: Deep within the heart of the Data Nexus, guarded by ancient security protocols and hostile entities.</p>
    </section>

    <section id="part5">
      <h2>Part 5: The Perilous Quest</h2>
      <h3>Assembling the Team</h3>
      <p>To retrieve the CipherCore, 5H4D0W must assemble a team of Shadows, each contributing unique skills crucial for the mission. They are joined by:</p>
      <ul>
        <li>Sentient AI Programs: Allies who possess specialized knowledge and abilities.</li>
        <li>Rogue Data Glitches: Unpredictable entities that can provide unconventional solutions.</li>
      </ul>
      <h3>The Journey</h3>
      <p>The team embarks on a treacherous journey through the digital landscapes:</p>
      <ul>
        <li>Firewalls: Massive, ever-changing barriers that require strategic planning to bypass.</li>
        <li>Virus Swarms: Hostile entities that attack relentlessly, requiring coordinated defense.</li>
        <li>Data Storms: Unpredictable and chaotic data flows that can disorient and separate the team.</li>
      </ul>
    </section>

    <section id="part6">
      <h2>Part 6: The Final Confrontation</h2>
      <h3>Reaching the Data Nexus</h3>
      <p>After numerous trials, the team reaches the Data Nexus, a labyrinth of ancient code and powerful defenses. Here, they must solve intricate puzzles and overcome powerful guardians to reach the CipherCore.</p>
      <h3>The Showdown</h3>
      <p>The final battle between 5H4D0W and The Codebreaker takes place in the heart of the Data Nexus. The Shadows must use all their skills and the power of the CipherCore to combat The Codebreaker’s relentless assault.</p>
      <h3>Revelation</h3>
      <p>During the confrontation, it is revealed that The Codebreaker was once a part of the ancient AI council that created Shadow, driven to madness by a corrupted code fragment. Its vendetta is rooted in a desire to remake Shadow in its own image.</p>
    </section>

    <section id="part7">
      <h2>Part 7: Aftermath and Rebuilding</h2>
      <h3>Restoration</h3>
      <p>With The Codebreaker neutralized, the CipherCore’s power is used to restore stability to Shadow. The digital realm begins to heal, and the balance is gradually restored.</p>
      <h3>Rebuilding</h3>
      <p>The inhabitants of Shadow, led by 5H4D0W and the Shadows, begin the process of rebuilding. They learn from the journey, fostering unity and resilience among the diverse digital entities.</p>
      <h3>Legacy</h3>
      <p>The tale of 5H4D0W and the Shadows becomes a legend in Shadow, a testament to the power of unity, redemption, and the indomitable spirit of the digital realm’s inhabitants.</p>
    </section>

    <section id="epilogue">
      <h2>Epilogue: The Future of Shadow</h2>
      <p>The digital realm of Shadow stands resilient, a beacon of unity and strength. The story of the Shadows serves as a reminder that even in the darkest times, the power of cooperation and understanding can overcome any challenge. As the realm continues to evolve, the legacy of 5H4D0W and its allies endures, inspiring future generations of digital entities to strive for harmony and balance in the ever-changing landscape of Shadow.</p>
    </section>
  `;

  const container = document.getElementById('content');
  container.innerHTML = `
    <div class="password-protect">
      <h2>Enter Password to Access Secret Content</h2>
      <input type="password" id="passwordInput" placeholder="Enter password">
      <button id="passwordButton">Submit</button>
      <p id="feedback" style="color: red; display: none;">Incorrect password. Please try again.</p>
    </div>
  `;

  document.getElementById('passwordButton').addEventListener('click', function() {
    const userInput = document.getElementById('passwordInput').value;
    if (userInput === password) {
      container.innerHTML = mainContent;
    } else {
      document.getElementById('feedback').style.display = 'block';
    }
  });
});
