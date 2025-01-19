# Budgeting App

A modern, responsive budgeting application built with **React**, **Tailwind CSS**, and **Framer Motion**. This app helps users manage their finances, track multiple sources of income and expenses, set and achieve savings goals, and export data as CSV or PDF files. It also supports multiple languages for global accessibility.

---

## Features

### 1. Income Management
- Add, edit, and delete multiple sources of income.
- View a detailed breakdown of all income sources.

### 2. Expense Tracking
- Track expenses with categories (e.g., Groceries, Transport, Rent).
- Visualize expense distribution with a **Pie Chart**.
- Monitor expense trends over time with a **Line Chart**.

### 3. Savings Goals
- Set multiple savings goals with target amounts and end dates.
- Track progress dynamically with percentage bars.
- Receive motivational messages upon reaching milestones.

### 4. Data Export
- Export income and expense data as **CSV** or **PDF** files.

### 5. Localization
- Support for multiple languages using **react-i18next**.
- Easily switch between languages (e.g., English, Spanish).

### 6. Modern Design and Animations
- Responsive UI built with **Tailwind CSS**.
- Smooth transitions and animations using **Framer Motion**.

---

## Installation

### Prerequisites
- **Node.js** and **npm** installed.
- A code editor like **VS Code**.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/budgeting-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd budgeting-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The app will be available at `http://localhost:3000`.

---

## Usage

### Adding Income
1. Navigate to the income section.
2. Add a source of income and its amount.
3. View the breakdown of all income sources.

### Adding Expenses
1. Navigate to the expense section.
2. Add an expense with a name, amount, category, and optional date.
3. View expenses grouped by category and trends over time.

### Setting Savings Goals
1. Navigate to the savings goals section.
2. Add a goal with a name, target amount, and end date.
3. Track your progress dynamically.

### Exporting Data
1. Use the export buttons to download income or expense data as a CSV or PDF file.

### Switching Languages
1. Use the language switcher in the header.
2. Toggle between available languages (e.g., English, Spanish).

---

## Technologies Used

### Frontend
- **React**: Core framework.
- **Tailwind CSS**: Responsive and modern styling.
- **Framer Motion**: Smooth animations and transitions.

### Charts
- **Chart.js**: Interactive Pie and Line Charts.

### Localization
- **react-i18next**: Multi-language support.

### Data Export
- **jspdf**: Generate PDF files.
- **Blob API**: Generate CSV files.

---

## Folder Structure
```
src/
|-- components/      # Reusable React components
|-- utils/           # Utility functions (e.g., data export)
|-- i18n.js          # Localization configuration
|-- App.js           # Main app component
|-- index.js         # App entry point
|-- styles.css       # Global styles 
```

---

## Future Enhancements

1. **Recurring Transactions**:
   - Automatically add recurring income or expenses (e.g., monthly subscriptions).

2. **Dark Mode**:
   - Enable a dark theme for improved user experience.

3. **Advanced Analytics**:
   - Predict future expenses and income trends.

4. **Cloud Integration**:
   - Sync data across devices with a cloud-based backend.

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact

For any questions or feedback, feel free to reach out:
- **Email**: naledisandamela@gmail.com
- **GitHub**: [your-username](https://github.com/your-username)
