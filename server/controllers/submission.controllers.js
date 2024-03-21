import prisma from "../db/db.config.js";

export const createSubmission = async (req, res) => {
  console.log(req.body);
  const { username, language, stdin, sourceCode } = req.body;
  try {
    const submission = await prisma.submission.create({
      data: {
        username,
        language,
        stdin,
        sourceCode,
      },
    });

    console.log(submission);

    const submissions = await prisma.submission.findMany();

    res
      .status(201)
      .json({ message: "Submission created", submission, submissions });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSubmissions = async (req, res) => {
  try {
    const submissions = await prisma.submission.findMany();
    res.status(200).json({
      message: "All submissions retrieved",
      submissions,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
