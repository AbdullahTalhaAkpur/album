const express = require('express');
const router = express.Router();
const Notification = require('../models/notification');
const User = require('../models/user')

// Create a new notification
router.post('/', async (req, res) => {
  const notification = new Notification({
    userId: req.body.userId,
    message: req.body.message,
  });

  router.post('/addFriend', async (req, res) => {
          const { userId, friendId } = req.body;
        
          try {
            await User.findByIdAndUpdate(userId, { $push: { friends: friendId } });
            
            const notification = new Notification({
              userId: friendId,
              message: `You have a new friend request from ${userId}`,
            });
            await notification.save();
            
            res.status(200).json({ message: 'Friend added and notification sent' });
          } catch (err) {
            res.status(500).json({ message: err.message });
          }
        });

  try {
    const newNotification = await notification.save();
    res.status(201).json(newNotification);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get notifications for a user
router.get('/:userId', async (req, res) => {
  try {
    const notifications = await Notification.find({ userId: req.params.userId });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Mark a notification as read
router.patch('/:id', async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    res.json(notification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;